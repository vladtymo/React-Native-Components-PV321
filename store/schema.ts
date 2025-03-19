import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const tasksTable = sqliteTable("tasks", {
    id: int().primaryKey({ autoIncrement: true }),
    text: text().notNull()
});

export type Task = typeof tasksTable.$inferSelect;