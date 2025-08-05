import { Router } from "express";
import getPopularTours from "../controllers/popularTours.controller.js";

const popularTours = Router();

popularTours.get("/popular-tours",getPopularTours);

export default popularTours;