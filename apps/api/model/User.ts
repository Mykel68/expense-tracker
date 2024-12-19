import { pgTable, serial, text } from 'drizzle-orm/pg-core';  // Adjust the import according to your setup

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    email: text('email').notNull(),
    password: text('password').notNull(),
});
