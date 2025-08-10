import getTreks from "../controllers/treks.controller.js";
import { Router } from "express";

const treks = Router();
treks.get("/treks-data",getTreks);

export default treks;