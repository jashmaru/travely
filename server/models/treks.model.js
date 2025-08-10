import pool from "../config/db.js"

export default async function fetchTreks()
{
    try {
        const result = await pool.query('SELECT * FROM treks');
        return result.rows
    } catch (error) {
        console.log("Error In Fetching Treks : "+error);
    }
}