# Fênix | Cofre Digital — Manual (v1.3)

Aplicativo para guardar, organizar, buscar e exportar documentos pessoais e administrativos com segurança. Os arquivos são criptografados no próprio aparelho. A Fênix não recebe nenhum documento nem dado seu.

## 1. Primeiro acesso

1. Abra o aplicativo e toque em **Criar novo usuário**.
2. Informe um nome e uma senha com pelo menos 8 caracteres.
3. **Guarde bem a senha.** Ela não pode ser recuperada: sem ela, os documentos não abrem.

O cofre bloqueia sozinho após 10 minutos sem uso. Você também pode tocar em **Bloquear**.

## 2. Guardar documentos

- Toque em **＋ Enviar** e escolha arquivos PDF, JPG ou PNG (até 25 MB cada), ou use **Fotografar documento** no celular.
- Escolha a **categoria** e, se quiser, informe o nome e a data de emissão.
- Se o arquivo já existir no cofre, o aplicativo avisa antes de enviar de novo.
- As categorias iniciais podem ser renomeadas, e você pode criar outras em **Ajustes**.
- A aba **Pastas** mostra a organização `/AAAA/MM_TipoDeDocumento_Usuario/`.
- Toda exclusão pede confirmação.

## 3. Buscar e filtrar

Na aba **Documentos** há busca por nome e filtros por categoria, formato e período (por data de emissão ou de envio). Os itens aparecem em ordem alfabética.

## 4. Exportar com marca-d'água

1. Na aba **Documentos**, marque os documentos e toque em **Exportar ZIP**.
2. Confira a seleção e escolha o formato: original, PDF, imagem ou os dois.
3. Para aplicar marca-d'água, informe a **finalidade** (e, se quiser, o destinatário). O texto leva a **data da exportação**. Exemplo: `20/11/2026 — Para uso da Empresa X — Finalidade: dados necessários do RH`.
4. Escolha o estilo: **faixa única na diagonal** (padrão), faixa discreta no rodapé, 3 faixas ou mosaico. A prévia mostra a posição.
5. Baixe o ZIP, nomeado `doc_usuario_data.zip`.

A marca-d'água vai só nas cópias exportadas. Os originais do cofre não mudam. Ela identifica a finalidade da cópia, mas não impede que alguém a recorte ou edite.

## 5. Onde guardar (Ajustes → Onde guardar os documentos)

Sem destino conectado, tudo fica só neste aparelho. Para ter cópia e usar em outros aparelhos, conecte um destino seu. No destino vão arquivos e índice criptografados.

### Pasta do aparelho
Toque em **Usar uma pasta do aparelho** e escolha a pasta. Funciona em Chrome/Edge no computador e no Android. Não funciona no iPhone.

### Google Drive
Você precisa de um **ID de cliente OAuth** do Google Cloud (feito uma vez):

1. No Google Cloud Console, crie um projeto e ative a **Google Drive API**.
2. Em Credenciais, crie um **ID do cliente OAuth** do tipo **Aplicativo da Web**.
3. Em **URIs de redirecionamento autorizados**, adicione exatamente o endereço do `index.html` onde o app está publicado.
4. Na tela de consentimento, use apenas o escopo **drive.file** (o app só enxerga o que ele mesmo cria).
5. No aplicativo, toque em **Conectar Google Drive**, cole o ID e autorize.

O login do Google dura cerca de 1 hora. Depois, toque em **☁ Reconectar** no topo.

### Usar o cofre em outro aparelho
Na tela de entrada, toque em **Abrir cofre de pasta / Drive**, escolha o destino e informe a senha do cofre.

### Indicador de estado (topo)
Sincronizado · Sincronizando… · Pendente · Reconectar · Erro. Tocar nele sincroniza na hora.

## 6. Senha, backup e segurança

- **Trocar senha:** Ajustes → Trocar senha. Os outros aparelhos precisarão abrir o cofre de novo pelo destino.
- **Backup:** Ajustes → Baixar backup (.zip, com arquivos criptografados). Para restaurar, use a senha original.
- **Apagar todos os dados:** Ajustes. Exige digitar APAGAR. Os arquivos já enviados ao destino não são apagados.
- **Registro:** a aba Registro mostra envios, exportações, exclusões e outras ações (não é sincronizado entre aparelhos).

## 7. Limitações

- Sem destino conectado, limpar os dados do navegador apaga o cofre: conecte um destino e faça backups.
- Senha esquecida = documentos irrecuperáveis.
- No aparelho, nomes, categorias e datas ficam legíveis; no destino tudo vai criptografado (exceto o nome do usuário e o ID do cofre).
- PDFs protegidos por senha não recebem marca-d'água nem são convertidos.
- Caracteres fora do alfabeto latino viram "?" na marca-d'água de PDF.

## 8. Changelog

- **v1.3** — pacote reorganizado no padrão Fênix (ícones em `icone/`); sem mudança de comportamento.
- **v1.2** — destinos à escolha do usuário (pasta do aparelho e Google Drive), índice criptografado, abrir o cofre em outro aparelho, sincronização com indicador de estado.
- **v1.1** — marca-d'água em faixa única com 4 estilos e prévia; funciona offline (sem CDN) e é instalável (PWA); trocar senha; miniatura de PDF; fotografar documento; botão Sobre.
- **v1.0** — versão inicial.
