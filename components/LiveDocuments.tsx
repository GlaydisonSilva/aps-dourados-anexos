 'use client';
import {useEffect,useState} from 'react';
import {supabase,toDocument,Row} from '../lib/supabase';
import type {Category,Document} from '../lib/documents';
import DocumentList from './DocumentList';
export default function LiveDocuments({category}:{category?:Category}){
 const [items,setItems]=useState<Document[]>([]);const [error,setError]=useState('');const [loading,setLoading]=useState(true);
 useEffect(()=>{let active=true;async function load(){if(!supabase){setError('Configure as variáveis do Supabase na Vercel.');setLoading(false);return;}let query=supabase.from('documentos').select('*').eq('publicado',true).order('atualizado_em',{ascending:false});if(category)query=query.eq('pagina',category);const {data,error}=await query;if(active){setItems(((data||[]) as Row[]).map(toDocument));setError(error?.message||'');setLoading(false);}}load();return()=>{active=false}},[category]);
 if(loading)return <div className="empty">Carregando documentos...</div>;if(error)return <div className="empty">Não foi possível carregar os documentos: {error}</div>;return <DocumentList items={items}/>;
}
