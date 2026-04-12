import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { env } from "@/env";
import * as schema from "./schema";
import * as relations from "./relations";

const connection = mysql.createPool({
  uri: env.DATABASE_URL,
});

export const db = drizzle(connection, {
  schema: { ...schema, ...relations },
  mode: "default",
});
