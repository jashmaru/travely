import pool from "../config/db.js"

export default async function fetchTours()
{
    try {
        const result = await pool.query('SELECT id,name,imgurl,duration,price,type FROM tours');
        return result.rows;
    } catch (error) {
        console.log("Error In Fetching Tours : "+error);
    }
}