import { Router } from "express";
import getPopularTreks from "../controllers/popularTreks.controller.js";

const popularTreks = Router();

popularTreks.get("/popular-treks",getPopularTreks);

export default popularTreks;