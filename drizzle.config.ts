import "dotenv/config";
import { type Config } from "drizzle-kit";

export default {
  dialect: "postgresql",
  schema: ["./src/*.ts"],
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  breakpoints: false, // no need for postgreSQL databases
} satisfies Config;
