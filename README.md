# APS Dourados MS – Anexos — Etapa 8

## Publicação
1. Substitua os arquivos do repositório GitHub pelo conteúdo deste ZIP, preservando as pastas.
2. No Supabase, em Project Settings / API Keys, copie a **Project URL** e a chave **anon/public** (ou publishable compatível). **Nunca use service_role/secret no navegador.**
3. Na Vercel, em Project > Settings > Environment Variables, cadastre `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` para Production e Preview.
4. Faça um novo deploy (Redeploy) após salvar as variáveis.
5. Abra `/admin`, entre com o usuário já criado no Supabase e cadastre um PDF de teste sem dados pessoais.

## Segurança
O banco usa RLS e a função `eh_administrador()` já criada na etapa anterior. Somente administradores autenticados podem modificar dados. Os PDFs no bucket público ficam acessíveis a qualquer pessoa que possua a URL, mesmo quando o registro estiver como rascunho. Não envie documentos sigilosos.

A data é gerenciada pelo trigger do banco. O arquivo PDF é opcional ao editar um cadastro existente. Não há suporte a agendamento ou histórico de versões.
