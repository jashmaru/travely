import { Router } from "express";
import getPopularTreks from "../controllers/popularTreks.controller";

const popularTreks = Router();

popularTreks.get("/popular-treks",getPopularTreks);

export default popularTreks;