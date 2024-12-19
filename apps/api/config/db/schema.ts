// config/db/schema.ts
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const user = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    password: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
});
