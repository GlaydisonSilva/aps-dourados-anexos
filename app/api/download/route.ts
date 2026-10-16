import {NextRequest,NextResponse} from 'next/server';
import {createClient} from '@supabase/supabase-js';
export async function GET(request:NextRequest){
const id=request.nextUrl.searchParams.get('id');if(!id||!/^[0-9a-f-]{36}$/i.test(id))return new NextResponse('Documento inválido',{status:400});
const url=process.env.NEXT_PUBLIC_SUPABASE_URL,key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;if(!url||!key)return new NextResponse('Configuração pendente',{status:503});
const client=createClient(url,key);const {data}=await client.from('documentos').select('arquivo_path,titulo').eq('id',id).eq('publicado',true).maybeSingle();if(!data)return new NextResponse('Documento não encontrado',{status:404});
const {data:file,error}=await client.storage.from('documentos-pdf').download(data.arquivo_path);if(error||!file)return new NextResponse('PDF indisponível',{status:502});
const safe=data.titulo.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9_-]+/g,'-').slice(0,80)||'documento';return new NextResponse(await file.arrayBuffer(),{headers:{'Content-Type':'application/pdf','Content-Disposition':`attachment; filename="${safe}.pdf"`,'Cache-Control':'no-store'}});
}
