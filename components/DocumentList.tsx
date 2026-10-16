'use client';
import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import type { Document } from '../lib/documents';
import DocumentCard from './DocumentCard';
export default function DocumentList({items}:{items:Document[]}) {
 const [search,setSearch]=useState(''); const [tag,setTag]=useState(''); const [order,setOrder]=useState('recent');
 const tags=Array.from(new Set(items.map(d=>d.tag))).sort();
 const filtered=useMemo(()=>items.filter(d=>(!tag||d.tag===tag)&&`${d.title} ${d.description} ${d.tag}`.toLocaleLowerCase('pt-BR').includes(search.toLocaleLowerCase('pt-BR'))).sort((a,b)=>order==='name'?a.title.localeCompare(b.title,'pt-BR'):b.updatedAt.split('/').reverse().join('').localeCompare(a.updatedAt.split('/').reverse().join(''))),[items,search,tag,order]);
 return <><div className="filters"><label className="filter-search"><Search size={19}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Pesquisar documentos..." aria-label="Pesquisar documentos"/></label><select value={tag} onChange={e=>setTag(e.target.value)} aria-label="Filtrar categoria"><option value="">Todas as categorias</option>{tags.map(t=><option key={t}>{t}</option>)}</select><select value={order} onChange={e=>setOrder(e.target.value)} aria-label="Ordenar documentos"><option value="recent">Mais recentes</option><option value="name">Nome (A–Z)</option></select></div>{filtered.length?<div className="document-grid">{filtered.map(d=><DocumentCard key={d.id} document={d}/>)}</div>:<div className="empty">{items.length?'Nenhum documento corresponde aos filtros.':'Ainda não há documentos cadastrados nesta página.'}</div>}</>;
}
