import pool from "../config/db.js";

export default async function fetchPopularTours(){
    const result = await pool.query("SELECT * FROM tours WHERE is_popular=true");
    return result.rows;
}