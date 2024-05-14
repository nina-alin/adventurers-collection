import "@/drizzle/envConfig";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";
import { NextResponse } from "next/server";

export const db = drizzle(sql, { schema });

export async function GET() {
  const books = await db.query.book.findMany();

  return NextResponse.json(books);
}

export async function POST(request: Request) {
  const res = await request.json();
  const book = await db.insert(res).values(res);

  return NextResponse.json(book);
}

