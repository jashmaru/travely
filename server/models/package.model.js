import pool from "../config/db.js"

export default async function fetchPackage(type,id)
{
    if(type==="tour")
    {
        try {
            const result = await pool.query("SELECT * FROM tours WHERE id=$1",[id]);
            return result.rows
        } catch (error) {
            console.log("Error In Fetching Data From DB Of Package : "+error);
        }
    }
    else if(type==="trek")
    {
        try {
            const result = await pool.query("SELECT * FROM treks WHERE id=$1",[id]);
            return result.rows
        } catch (error) {
            console.log("Error In Fetching Data From DB Of Package : "+error);
        }
    }
    
    return console.log("Type Don't Match");
}