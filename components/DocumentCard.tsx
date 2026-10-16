import { CalendarDays, Download, Eye, FileText } from 'lucide-react';
import type { Document } from '../lib/documents';
export default function DocumentCard({document:d}:{document:Document}) {
 return <article className="document-card"><div className="document-body"><h3><FileText size={21} aria-hidden="true"/>{d.title}</h3><span className="tag">{d.tag}</span><p>{d.description}</p></div><div className="document-footer"><span className="date"><CalendarDays size={16} aria-hidden="true"/>Atualizado em {d.updatedAt}</span><div className="actions"><a className="btn btn-outline" href={d.url} target="_blank" rel="noopener noreferrer" aria-label={`Visualizar PDF: ${d.title}`}><Eye size={16}/>Visualizar</a><a className="btn btn-primary" href={`/api/download?url=${encodeURIComponent(d.url)}`} aria-label={`Baixar PDF: ${d.title}`}><Download size={16}/>Baixar PDF</a></div></div></article>;
}
