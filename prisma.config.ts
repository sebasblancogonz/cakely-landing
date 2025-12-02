import { config } from "dotenv";
import { defineConfig, env } from "prisma/config";

// Cargar .env.local primero, luego .env como fallback
config({ path: ".env.local" });
config({ path: ".env" });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
