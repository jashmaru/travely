import pool from "../config/db.js"

export default async function fetchSearch(value)
{
    try {
        const result = 
        await pool.query(`SELECT id,name,imgurl,duration,price,type FROM tours WHERE name ILIKE $1 UNION ALL SELECT id,name,imgurl,duration,price,type FROM treks WHERE name ILIKE $1`,[`%${value}%`]);
        return result.rows;   
    } catch (error) {
        console.log("Error In Search Model : "+error);
    }
}