# ms-newgen-leaders-email 📧

## Descrição

Este projeto é um microserviço responsável pelo envio de e-mails para a aplicação [Newgen Leaders](https://github.com/raphaelkauan/newgen-leaders).

## Funcionalidades

- Envio de mensagem de boas-vindas

## Configuração .env
Para configurar o microserviço, crie um arquivo .env na raiz do projeto com as seguintes variáveis:
```bash
MAIL_HOST="conect server"
MAIL_PORT="port"
MAIL_FROM="email for send"
MAIL_PASS="password from email"

URL_RMQ="conect RabbitMQ"
QUEUE_RMQ="queue"

DATABASE_URL="conect postgres"
```

## Licença

Este projeto está licenciado sob a [MIT licensed](LICENSE).
