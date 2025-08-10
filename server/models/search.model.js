import pool from "../config/db.js"

export default async function fetchSearch(value)
{
    try {
        const result = 
        await pool.query(`SELECT * FROM tours WHERE name ILIKE $1 UNION ALL SELECT * FROM treks WHERE name ILIKE $1`,[`%${value}%`]);
        return result.rows;   
    } catch (error) {
        console.log("Error In Search Model : "+error);
    }
}