
# 📒 Agenda de Contatos com React

Este projeto é uma aplicação de agenda de contatos construída com **React**. A aplicação permite **adicionar, editar, buscar e deletar** contatos. Os dados são armazenados localmente utilizando o `json-server`, que simula uma API REST.

---

## 🚀 Tecnologias Utilizadas

- React
- JavaScript (ES6+)
- json-server (Fake API REST)
- CSS

---

## 📦 Instalação

### 1. Clone o repositório

git clone https://github.com/seu-usuario/sua-agenda.git

cd sua-agenda

2. Instale as dependências

npm install

🧪 Rodando o json-server

1. Instale o json-server (se ainda não tiver)

npm install -g json-server

2. Crie um arquivo db.json na raiz do projeto com o seguinte conteúdo:

{
  "contatos": [
    {
      "id": 1,
      "nome": "Gabriel Marcano",
      "telefone": "(51) 99999-0000",
      "email": "gabriel@email.com"
    }
  ]
}

3. Inicie o servidor na porta 3001
⚠️ Importante: A aplicação espera a API rodando em http://localhost:3001


json-server --watch db.json --port 3001

Você verá algo como:

\{^_^}/ hi!

  Resources
  http://localhost:3001/contatos

  Home
  http://localhost:3001

▶️ Rodando a aplicação React

Em outro terminal, execute:

npm start

A aplicação estará disponível em:

http://localhost:3000

🔍 Funcionalidades:
✅ Listagem de contatos
🔍 Busca por nome
➕ Adição de novos contatos
✏️ Edição de contatos existentes
❌ Exclusão de contatos
💾 Armazenamento local via json-server

🧑‍💻 Autor:

Gabriel Marcano
