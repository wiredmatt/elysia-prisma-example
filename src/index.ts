import app from "./api";

console.log(import.meta.env.PORT);

app.listen(parseInt(import.meta.env.PORT || "3000"));

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
