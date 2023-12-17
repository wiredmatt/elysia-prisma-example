import { Elysia, t } from "elysia";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const app = new Elysia()
  .get("/", () => "hi")
  .post(
    "/sign-up",
    async ({ body }) =>
      db.user.create({
        data: body,
      }),
    {
      body: t.Object({
        username: t.String(),
        password: t.String({
          minLength: 8,
        }),
      }),
    }
  )
  .onError(({ code, error }) => {
    switch (code) {
      case "VALIDATION":
        console.log(error.all);
        return error.all;
      default:
        return {
          name: error.name,
          message: error.message,
        };
    }
  });

export type App = typeof app;
export default app;
