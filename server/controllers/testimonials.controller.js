import fetchTestimonials from "../models/testimonials.model.js";

export default async function getTestimonials(req,res)
{
    try {
        const testimonials = await fetchTestimonials();
        res.json(testimonials);
    } catch (error) {
        console.log("Error In Getting Testimonials");
    }
}