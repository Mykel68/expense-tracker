// import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

// export const user = pgTable("users", {
//     user_id: integer().primaryKey().generatedAlwaysAsIdentity(),
//     password: varchar({ length: 255 }).notNull(),
//     email: varchar({ length: 255 }).notNull().unique(),
//     // record_id: 
// });

// export const category = pgTable("category", {
//     categoty_id: integer().primaryKey().generatedAlwaysAsIdentity(),
//     name: varchar({ length: 255 }).notNull().unique(),
//     description: varchar({ length: 255 }).notNull(),
// })

// export const record = pgTable("record", {
//     record_id: integer().primaryKey().generatedAlwaysAsIdentity(),
//     // category_id:integer().references()
//     // category: varchar({ length: 255 }).notNull().unique(),
//     description: varchar({ length: 255 }).notNull(),
// })

export * from '../../model/User';
