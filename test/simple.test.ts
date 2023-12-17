import { expect, test } from "bun:test";
import { edenTreaty } from "@elysiajs/eden";
import type { App } from "../src/api";

const api = edenTreaty<App>(`http://0.0.0.0:${Bun.env.PORT || 3000}`);

test("Base API", async () => {
  const response = await api.get();
  expect(response.data).toBe("hi");
});

test("Sign up", async () => {
  let username = "test" + Math.random() * 1000;

  const response = await api["sign-up"].post({
    username,
    password: "test_abcd",
  });

  expect(response.data).toMatchObject({
    username,
    password: "test_abcd",
  });
});
