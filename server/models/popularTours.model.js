import pool from "../config/db.js";

export default async function fetchPopularTours(){
    
    try {
            pool.connect();
            const result = await pool.query("SELECT * FROM tours WHERE is_popular=true");
            console.log("sended datad from model")
            return result.rows;
            
    } catch (error) {
        console.log("eror in getting query")
    }

}