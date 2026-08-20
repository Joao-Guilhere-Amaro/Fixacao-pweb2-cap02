# Fixacao-pweb2-cap02

# 🧠 Atividade de Fixação — Servidor HTTP com Node.js

### Objetivo

Criar um servidor HTTP utilizando **exclusivamente o módulo `node:http`**, sem Express ou qualquer outro framework.

Todo o código deverá ficar em:

```text
index.js
```

O servidor deverá ouvir na porta:

```javascript
process.env.PORT || 3000
```

### Regras

Você deverá utilizar:

* `http.createServer()`
* `req.method`
* `req.url`
* `req.headers`
* `req.on('data')`
* `req.on('end')`
* `req.url.split('/')`
* `req.url.startsWith()`
* `res.writeHead()`
* `res.end()`
* `if / else if / else`
* `return` após finalizar cada rota

**Não utilize Express.**

---

# 📋 Rotas

| #  | Método   | Rota             | O que fazer                    | Resposta                                                   |
| -- | -------- | ---------------- | ------------------------------ | ---------------------------------------------------------- |
| 1  | `GET`    | `/inicio`        | Rota simples                   | `Bem-vindo ao servidor!`                                   |
| 2  | `GET`    | `/info`          | Retornar HTML                  | `200` + `Content-Type: text/html` + `<h1>Informações</h1>` |
| 3  | `GET`    | `/usuario/:nome` | Pegar nome usando `split('/')` | `Olá, {nome}!`                                             |
| 4  | `POST`   | `/mensagem`      | Ler o corpo com `data`/`end`   | Devolver exatamente o corpo recebido                       |
| 5  | `PUT`    | `/produtos/:id`  | Pegar ID usando `split('/')`   | `Produto {id} atualizado`                                  |
| 6  | `DELETE` | `/produtos/:id`  | Excluir produto                | `204` e corpo vazio                                        |
| 7  | `PATCH`  | `/perfil`        | Atualização simples            | `Perfil atualizado`                                        |
| 8  | `HEAD`   | `/health`        | Criar cabeçalho personalizado  | `200` + `X-Health: online` + sem corpo                     |
| 9  | `GET`    | `/cliente`       | Verificar `User-Agent`         | Veja regras abaixo                                         |
| 10 | `GET`    | `/admin`         | Verificar `X-Codigo`           | Veja regras abaixo                                         |


