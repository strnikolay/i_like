import path from "node:path";
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

type Env = {
  PRISMA_DATABASE_URL: string
}

export default defineConfig({
  //schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env<Env>("PRISMA_DATABASE_URL"),
  },
  schema: path.join("prisma", "schema.prisma"),
});
