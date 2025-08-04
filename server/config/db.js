import dotenv from "dotenv";
dotenv.config(); // ✅ Load .env before anything else
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
export default pool;