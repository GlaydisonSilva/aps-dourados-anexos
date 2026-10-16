import './globals.css';
import Link from 'next/link';
import { FileStack } from 'lucide-react';
export const metadata = { title:'APS Dourados MS – Anexos',description:'Central de documentos da APS Dourados MS' };
const menu = [['/','Início'],['/requerimentos','Requerimentos'],['/passo-a-passo','Passo a Passo'],['/orientacoes','Orientações'],['/outros','Outros']];
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="pt-BR"><body><header className="header"><div className="container nav"><Link className="brand" href="/"><FileStack size={27}/><span>APS Dourados MS <small>Central de Anexos</small></span></Link><nav aria-label="Navegação principal">{menu.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav></div></header>{children}<footer><div className="container">APS Dourados MS – Anexos · Portal de consulta a documentos</div></footer></body></html>;
}
