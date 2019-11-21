# Locadora API - Stacks

1. Node.js - Linguagem do teste
2. MySql - Banco SQL escolhido
3. Redis - Utilizado para filas de locação
4. Adonis.js - Framework node.js

## Setup

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