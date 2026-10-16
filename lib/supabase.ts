import { createClient } from '@supabase/supabase-js';
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = url && key ? createClient(url, key) : null;
export const bucket = 'documentos-pdf';
export type Row = {id:string;titulo:string;descricao:string;pagina:string;categoria:string;arquivo_path:string;publicado:boolean;criado_em:string;atualizado_em:string};
export function pdfUrl(path:string){return supabase?.storage.from(bucket).getPublicUrl(path).data.publicUrl || '#';}
export function toDocument(r:Row){return {id:r.id,title:r.titulo,description:r.descricao,category:r.pagina as import('./documents').Category,tag:r.categoria,url:pdfUrl(r.arquivo_path),updatedAt:new Date(r.atualizado_em).toLocaleDateString('pt-BR')};}
