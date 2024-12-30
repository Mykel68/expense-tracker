import { pgTable, varchar, serial, timestamp, boolean } from 'drizzle-orm/pg-core';

export const user = pgTable('users', {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    password: varchar('password', { length: 255 }).notNull(),
    isAdmin: boolean('is_admin').default(false),
    createdAt: timestamp('created_at').defaultNow(),
    // updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
});
