 'use client';
import Link from 'next/link';import {useEffect,useState} from 'react';
import {Search,FileText,ListChecks,ClipboardList,FolderOpen,ArrowRight} from 'lucide-react';
import {categories,Document} from '../lib/documents';import {supabase,toDocument,Row} from '../lib/supabase';import DocumentCard from '../components/DocumentCard';
const icons=[FileText,ListChecks,ClipboardList,FolderOpen];
export default function Home(){const [search,setSearch]=useState('');const [docs,setDocs]=useState<Document[]>([]);
useEffect(()=>{supabase?.from('documentos').select('*').eq('publicado',true).then(({data})=>setDocs(((data||[]) as Row[]).map(toDocument)));},[]);
const results=search.trim()?docs.filter(d=>`${d.title} ${d.description} ${d.tag}`.toLocaleLowerCase('pt-BR').includes(search.toLocaleLowerCase('pt-BR'))):[];
return <main className="container"><section className="hero"><h1>Documentos em um só lugar</h1><p>Consulte requerimentos, passo a passo, orientações e outros documentos de forma rápida e organizada.</p><label className="search"><Search size={21}/><input aria-label="Pesquisar documentos" placeholder="Pesquisar documento..." value={search} onChange={e=>setSearch(e.target.value)}/></label></section>{search.trim()?<section className="section"><h2>Resultados da pesquisa</h2>{results.length?<div className="document-grid">{results.map(d=><DocumentCard key={d.id} document={d}/>)}</div>:<div className="empty">Nenhum documento encontrado.</div>}</section>:<section className="section"><h2>Explore as seções</h2><div className="cards">{categories.map((c,i)=>{const Icon=icons[i];return <Link className="card" key={c.slug} href={'/'+c.slug}><Icon size={30}/><h3>{c.label}</h3><p>{c.description}</p><span>Explorar <ArrowRight size={16}/></span></Link>})}</div></section>}</main>}
