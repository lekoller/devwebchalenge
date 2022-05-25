# Brasilfone dev-web challenge

## Sobre a solução

Fora dividido em backend e frontend que ficam em diretórios separados, unidos por esta raiz. O banco de dados roda por container, e pode ser iniciado por um terminal neste diretório raiz via comando `docker-compose up --build` para a primeira vez, somente `docker-compose up` uma vez já tendo sido ativado. Optei por usar a mesma stack assinalada como preferencial da equipe, então fora utilizado Postgres.

### Backend

Seguindo na mesma linha, fora optado pelo NestJS, e pode ser ligado navegando para o diretório `disparo-pro-backend`, instalando as dependencias com `npm install` e executado com `npm run start:dev`.

#### Endpoints

```
http://localhost:3030/api/v1/accounts -> POST: Cria uma conta de usuário.
http://localhost:3000/api/v1/auth/login/ -> POST: Faz Login.
```

- Dados para criar uma conta:
```
{
	"name": "Leandro Koller",
	"email": "lekoller@yahoo.com",
	"password": "notapassword3*D", // senha precisa de um caracter especial, numeral e uma letra maiúscula.
	"phone": "11930400068",
	"marketing": false
}
```

- Dados para o login em uma conta:
```
{
	"user": "11930400068", // email ou numero de celular ocupam o mesmo campo user, e é discernido pelo backend.
	"password": "notapassword3*D", 
}
```

Adicionalmente é possível consultar a criação de uma conta através de seu id:

```
http://localhost:3030/api/v1/accounts/:id -> GET: Retorna alguns dados da conta de usuário.
```

### Frontend

Seguindo a mesma linha, foi feito um frontend resumido em NextJS. Ele possui apenas uma só rota ondealterna entre formulário de login e de cadastro. Após navegar para o seu diretório e instalar as dependencias com `npm install`, ele pode ser executado com `npm run dev`.

### Agradecimentos

Agradeço enormemente pela oportunidade que me instigou a conhecer este framework, NestJS, qual nunca havia trabalhado, e que me pareceu muito mais tranquilo de trabalhar com Typescript do que como já ensaiei fazer usando Express. Espero que me aceitei na equipe pois fiquei com muita vontade de trabalhar com ele diariamente.

Obrigado,
Leandro Koller

## Sobre o desafio

Esse é um desafio para o cargo de desenvolvedor web na Brasilfone.

O que nós esperamos aprender de você deste desafio:

- O seu formato / estilo de trabalho. 
- A forma de pensar e resolver problemas.
- A sua comunicação.

O que nós esperamos que você aprenda de nós:
- As formas como trabalhamos.
- Alguns dos problemas que resolvemos diariamente. 

## Primeiros passos: 

1 - Crie um repositório no github público que possamos olhar quando você finalizar.

2 - Execute o projeto conforme solicitado pela nossa equipe, descrito no documento: [`description`](/description.md)

## Considerações

- Tente escrever o melhor código que você conseguir. Isso tornará mais simples quando estivermos avaliando a solução. Lembre-se: será necessário explicar para nós como rodar e testar o código que você fez.
