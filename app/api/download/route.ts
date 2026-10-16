import { NextRequest, NextResponse } from 'next/server';
import { documents } from '../../../lib/documents';
export async function GET(request:NextRequest){
 const url=request.nextUrl.searchParams.get('url');
 const doc=documents.find(d=>d.url===url);
 if(!doc||!url||!url.startsWith('https://'))return new NextResponse('Documento não encontrado.',{status:404});
 try{const source=await fetch(url,{signal:AbortSignal.timeout(12000)});
 if(!source.ok||!source.headers.get('content-type')?.toLowerCase().includes('pdf'))return new NextResponse('PDF indisponível.',{status:502});
 const bytes=await source.arrayBuffer(); if(bytes.byteLength>20*1024*1024)return new NextResponse('Arquivo excede 20 MB.',{status:413});
 return new NextResponse(bytes,{headers:{'Content-Type':'application/pdf','Content-Disposition':`attachment; filename="documento-${doc.id.replace(/[^a-zA-Z0-9_-]/g,'')}.pdf"`,'Cache-Control':'no-store'}});
 }catch{return new NextResponse('Falha ao obter o PDF.',{status:502})}
}
