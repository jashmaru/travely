import pool from "../config/db.js"

export default async function fetchTours()
{
    try {
        const result = await pool.query('SELECT * FROM tours');
        return result.rows;
    } catch (error) {
        console.log("Error In Fetching Tours : "+error);
    }
}