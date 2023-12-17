# Elysia with Bun runtime

## Development
To start the development server run:
```bash
docker run -p 5432:5432 -e POSTGRES_PASSWORD=postgres POSTGRES_DB=elysia-prisma-db -d postgres
mv .env.example .env
bun prisma migrate deploy
bun dev
```
Open http://localhost:3000/ with your browser to see the result.

To run the tests run:

```bash
bun test
```

To inspect the test database run: 
```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/elysia-prisma-db?schema=public" bun prisma studio
```
