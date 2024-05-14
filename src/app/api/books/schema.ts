import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const book = pgTable("book", {
  id: serial("id"),
  title: text("name"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
