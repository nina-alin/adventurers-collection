import { defineConfig } from "drizzle-kit";
import "@/drizzle/envConfig";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/**/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.POSTGRES_URL as string,
  },
});
