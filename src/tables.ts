import { pgTable, unique, varchar } from "drizzle-orm/pg-core";

export const table = pgTable(
  "test_table",
  {
    id: varchar("id", { length: 30 }).notNull().primaryKey(),
    appId: varchar("app_id", { length: 30 }).notNull(),
    key: varchar("key", { length: 100 }).notNull().unique(),
  },
  (table) => [unique("test_table_unique").on(table.key, table.appId)]
);
