import { Router } from "express";
import getTestimonials from "../controllers/testimonials.controller.js";

const testimonials = Router();
testimonials.get("/testimonials",getTestimonials);

export default testimonials;