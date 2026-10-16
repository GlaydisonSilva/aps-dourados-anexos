# APS Dourados MS – Anexos (etapa 2)

Projeto Next.js com menu Início, Requerimentos, Passo a Passo, Orientações e Outros. As páginas internas exibem cards com título, etiqueta, descrição, data, visualizar e baixar PDF. Busca e filtros disponíveis.

## Executar localmente

1. Instale Node.js 20 ou superior.
2. Abra a pasta do projeto no terminal.
3. Execute `npm install` e depois `npm run dev`.
4. Acesse `http://localhost:3000`.

## Cadastrar documentos provisoriamente

Edite `lib/documents.ts`, adicionando registros à lista `documents`, usando apenas URLs HTTPS públicas e diretas para arquivos PDF. Campos: `id`, `title`, `category`, `tag`, `description`, `url`, `updatedAt` (DD/MM/AAAA). Os cards só aparecem após cadastrar documentos reais. O botão visualizar abre o link em nova aba; o botão baixar utiliza a rota `/api/download` para forçar download de PDFs válidos (limite 20 MB). URLs que exijam autenticação não funcionarão.

## Próxima etapa

Implementar autenticação, banco de dados e armazenamento de PDFs. `/admin` é apenas uma página informativa e **não** permite gerenciar arquivos ainda. Não publicar PDFs internos ou documentos com dados pessoais sem autorização e controles de acesso apropriados.

## Publicação

Pode ser hospedado na Vercel após conectar um repositório GitHub. O subdomínio desejado depende de disponibilidade.
