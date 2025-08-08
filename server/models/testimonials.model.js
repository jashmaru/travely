import pool from "../config/db.js";

export default async function fetchTestimonials()
{
    try {
        const result = await pool.query('SELECT * FROM testimonials');
        return result.rows
    } catch (error) {
        console.log("Error In Fetching Testimonials");
    }
}