# RapidChat

O RapidChat é um projeto que permite iniciar conversas no WhatsApp sem precisar adicionar contatos. Com apenas um número de telefone, você pode iniciar uma conversa rápida e enviar mensagens pré-definidas.

## Objetivo

O objetivo deste projeto é oferecer uma maneira ágil e conveniente de iniciar conversas no WhatsApp, especialmente em situações em que você não deseja adicionar o contato permanentemente à sua lista.

## Demonstração

Você pode ver uma demonstração do projeto [aqui](https://nhewvys.github.io/Whatsapp/).

## Uso

1. Ao abrir o projeto, você verá três campos: "Nome", "Mensagem" e "Número".

2. Preencha o campo "Número" com o número de telefone para o qual deseja iniciar a conversa no WhatsApp. O campo aceita o formato "(00) 0000-0000".

3. Preencha opcionalmente os campos "Nome" e "Mensagem". O campo "Nome" não é obrigatório.

4. Se você preencher o campo "Nome", quando a conversa for iniciada, será adicionado automaticamente um cumprimento inicial na mensagem, no formato "Olá, {nome}". Onde {nome} é o valor digitado no campo "Nome".

5. Clique no botão "Comece a conversar" para ser redirecionado para o WhatsApp com a conversa iniciada.

### Redirecionamento para o WhatsApp no Computador e Dispositivo Móvel

Ao clicar no botão "Comece a conversar" e escolher usar o WhatsApp instalado no seu computador ou dispositivo móvel, é importante observar o seguinte:

- Se você tiver o aplicativo WhatsApp instalado no computador e estiver com a sessão aberta, o redirecionamento ocorrerá para o aplicativo WhatsApp instalado.

- No entanto, se você escolher usar o WhatsApp Web e já tiver uma sessão aberta em outra aba ou janela do navegador, pode acontecer de abrir uma nova aba com a mensagem "Escolha usar aqui". Isso ocorre devido a uma limitação do navegador em criar uma nova sessão separada.

- Para evitar essa situação, é recomendável baixar o aplicativo WhatsApp para o computador ou utilizar o aplicativo WhatsApp no dispositivo móvel. Ao usar o WhatsApp instalado no seu dispositivo móvel, o redirecionamento ocorrerá diretamente para o aplicativo sem abrir uma nova aba ou janela do navegador.

- No entanto, é importante observar que o comportamento exato pode variar de acordo com o navegador, as configurações do dispositivo móvel e as versões do WhatsApp. Nem todos os navegadores e dispositivos móveis possuem integração perfeita com o WhatsApp instalado, e em alguns casos, pode ainda abrir uma nova aba ou janela.

- Recomenda-se testar o projeto em seu ambiente específico para verificar como o redirecionamento funciona no seu caso. Isso permitirá que você compreenda melhor o comportamento e forneça instruções claras para os usuários do seu projeto.

## Máscara IMask

O projeto utiliza a biblioteca IMask para aplicar a máscara no campo "Número" de telefone. A máscara segue o formato "(00) 0000-0000", onde cada "0" representa um dígito numérico.

A biblioteca IMask é uma poderosa ferramenta para a formatação de campos de entrada de texto. Ela fornece uma maneira fácil e flexível de aplicar máscaras a campos de texto, como telefones, CPFs, datas, entre outros.

Para saber mais sobre a biblioteca IMask, consulte a [documentação oficial](https://imask.js.org/).

