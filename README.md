# Locadora API - Stacks

1. Node.js - Linguagem do teste
2. MySql - Banco SQL escolhido
3. Redis - Utilizado para filas de locação
4. Adonis.js - Framework node.js

## Setup

Instale o Adonis.js https://adonisjs.com/docs/4.1/installation

No terminal vá até a pasta do projeto e execute o seguinte comando

```bash
cp .env-example .env
```

Use este comando para criar o banco de dados (MySql)

```bash
CREATE DATABASE locadora_4all
```

```bash
npm install
```

```bash
npm install mysql --save
```

```bash
adonis key:generate
```


### Migrations

Utilizei as migrations para criação das tabelas

```js
adonis migration:run
```

### Seeds

Seeds criam dados para popular o banco de dados

```js
adonis seed
```

### Server

Para rodar o servidor utilize o seguinte comando

```js
adonis serve
```
