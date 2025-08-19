import pool from "../config/db.js"

export default async function fetchTreks()
{
    try {
        const result = await pool.query('SELECT id,name,imgurl,duration,price,type FROM treks');
        return result.rows
    } catch (error) {
        console.log("Error In Fetching Treks : "+error);
    }
}