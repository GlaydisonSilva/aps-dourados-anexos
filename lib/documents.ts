export type Category = 'requerimentos' | 'passo-a-passo' | 'orientacoes' | 'outros';
export type Document = { id: string; title: string; category: Category; tag: string; description: string; url: string; updatedAt: string };
// Cadastre documentos somente com URLs reais de PDFs públicos.
export const documents: Document[] = [];
export const categories: { slug: Category; label: string; description: string }[] = [
 { slug:'requerimentos',label:'Requerimentos',description:'Formulários, requerimentos e anexos' },
 { slug:'passo-a-passo',label:'Passo a Passo',description:'Tutoriais e procedimentos detalhados' },
 { slug:'orientacoes',label:'Orientações',description:'Instruções e materiais de apoio' },
 { slug:'outros',label:'Outros',description:'Documentos complementares' }
];
