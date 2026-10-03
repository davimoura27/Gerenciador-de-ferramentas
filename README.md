# Asset Manager

Sistema web para gerenciamento de equipamentos e ativos, desenvolvido com **Java, Spring Boot, React e TypeScript**.

O projeto tem como objetivo simular uma aplicação utilizada para controle de ativos de uma empresa, permitindo cadastrar, consultar e gerenciar equipamentos, marcas e categorias.

Além de funcionar como uma aplicação prática, o projeto está sendo desenvolvido como parte do meu processo de aprofundamento em **desenvolvimento Full Stack**, com foco em integração entre uma API REST e uma aplicação React.

---

## Tecnologias

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* Bean Validation
* PostgreSQL
* Maven
* REST API

### Frontend

* React
* TypeScript
* Vite
* Axios
* React Router
* CSS

---

## Funcionalidades

### Equipamentos

* Listagem de equipamentos
* Visualização dos detalhes de um equipamento
* Cadastro de equipamentos
* Seleção de marca e categoria
* Controle de status do equipamento
* Atualização da listagem após o cadastro

### Marcas

* Cadastro e gerenciamento de marcas
* Consulta de marcas

### Categorias

* Cadastro e gerenciamento de categorias
* Consulta de categorias

### Dashboard

* Visualização da quantidade total de equipamentos
* Quantidade de equipamentos disponíveis
* Quantidade de equipamentos em uso
* Quantidade de equipamentos em manutenção
* Quantidade de equipamentos descartados

> Novas funcionalidades serão adicionadas conforme o desenvolvimento do projeto.

---

## Arquitetura

O projeto é dividido em duas aplicações principais:

```text
asset-manager/
│
├── backend/
│   ├── src/
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── .gitignore
└── README.md
```

### Backend

O backend é responsável pela regra de negócio, persistência dos dados, validações e disponibilização da API REST.

```text
backend
└── Spring Boot
    ├── Controllers
    ├── Services
    ├── Repositories
    ├── Entities
    ├── DTOs
    ├── Exceptions
    └── Configurations
```

### Frontend

O frontend é responsável pela interface da aplicação e comunicação com a API.

A aplicação utiliza **React Router** para navegação e **Axios** para realizar as requisições HTTP.

A interface está sendo organizada em componentes reutilizáveis, buscando manter cada componente com uma responsabilidade específica.

---

## Comunicação entre Frontend e Backend

O React se comunica com o backend através de requisições HTTP para a API REST.

Exemplo:

```text
React
  │
  │ HTTP / Axios
  ▼
Spring Boot
  │
  │ JPA / Hibernate
  ▼
PostgreSQL
```

Atualmente, entre os endpoints utilizados pelo frontend estão:

```text
GET    /equipments
GET    /equipments/{id}
POST   /equipments
PUT    /equipments/{id}
DELETE /equipments/{id}

GET    /brands
GET    /categories
```

---

## Como executar o projeto

### Backend

Entre na pasta:

```bash
cd backend
```

Execute:

```bash
./mvnw spring-boot:run
```

No Windows, também pode ser utilizado:

```bash
mvnw.cmd spring-boot:run
```

O backend será executado por padrão em:

```text
http://localhost:8080
```

### Frontend

Em outro terminal:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

O frontend será disponibilizado pelo Vite, normalmente em:

```text
http://localhost:5173
```

---

## Banco de dados

O projeto utiliza **PostgreSQL** para persistência dos dados.

Antes de executar o backend, configure as informações de conexão com o banco nas configurações da aplicação.

---

## Objetivos do projeto

Além de desenvolver uma aplicação funcional, este projeto busca aprofundar conhecimentos em:

* Desenvolvimento de APIs REST com Spring Boot
* Arquitetura em camadas
* DTOs e validação de dados
* Persistência com JPA/Hibernate
* Integração entre frontend e backend
* React e TypeScript
* Componentização
* Gerenciamento de estado
* React Router
* Comunicação HTTP com Axios
* Boas práticas de organização de código
* Git e GitHub
