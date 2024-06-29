# API-FOODS

Esta atividade tem como propósito o desenvolvimento de habilidades na criação
de APIs RESTful, manipulação de dados em um banco de dados NoSQL e prática com o framework Express. A atividade consiste na definição de uma API para gerenciar informações sobre alimentos em um sistema de estoque. A API deve incluir as seguintes rotas:

**1. Listar todos os alimentos (GET):**

- Rota: `/api/foods`
- Descrição: Retorna uma lista de todos os alimentos no banco de dados.
- _Campos de Resposta:_
  - id: ID único do alimento
  - name: Nome do alimento
  - category: Categoria do alimento
  - quantity: Quantidade disponível
  - expirationDate: Data de validade
  - price: Preço do alimento

**2. Buscar um alimento específico (GET):**

- Rota: `/api/foods/:id`
- Descrição: Retorna os detalhes de um alimento com base no ID fornecido.
- _Campos de Resposta:_
  - id: ID único do alimento
  - name: Nome do alimento
  - category: Categoria do alimento
  - quantity: Quantidade disponível
  - expirationDate: Data de validade
  - price: Preço do alimento

**3. Criar um novo alimento (POST):**

- Rota: `/api/foods`
- Descrição: Cria um novo alimento com base nos dados fornecidos.
- _Campos de Requisição:_
  - name: Nome do alimento (String)
  - category: Categoria do alimento (String)
  - quantity: Quantidade disponível (Number)
  - expirationDate: Data de validade (Date)
  - price: Preço do alimento (Number)

**4. Atualizar um alimento existente (PUT):**

- Rota: `/api/foods/:id`
- Descrição: Atualiza os dados de um alimento existente com base no ID fornecido.
- _Campos de Requisição (opcionais):_
  - name: Novo nome do alimento (String)
  - category: Nova categoria do alimento (String)
  - quantity: Nova quantidade disponível (Number)
  - expirationDate: Nova data de validade (Date)
  - price: Novo preço do alimento (Number)

**5. Excluir um alimento (DELETE):**

- Rota: `/api/foods/:id`
- Descrição: Remove um alimento com base no ID fornecido.

**Instruções:**

- Utilize o framework Express para criar as rotas da API.
- Defina uma estrutura em camadas para construir a API.
- Implemente a conexão com um banco de dados MongoDB para armazenar os alimentos.
- Utilize o Mongoose, ou outro ODM, para interação com o banco de dados.
- Se preferir, utilize um banco de dados no Atlas para hospedar os dados.
- Teste as rotas utilizando ferramentas como Postman, Thunder Client ou Insomnia para verificar o funcionamento correto da API.
