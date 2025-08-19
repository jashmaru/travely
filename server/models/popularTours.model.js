import pool from "../config/db.js";

export default async function fetchPopularTours(){
    
    try {
        const result = await pool.query("SELECT id,name,imgurl,duration,price,type FROM tours WHERE is_popular=true");
        console.log("sended datad from model")
        return result.rows;
            
    } catch (error) {
        console.log("eror in getting query")
    }

}