import { Router } from "express"
import getTours from "../controllers/tours.controller.js"

const tours = Router();
tours.get("/tours-data",getTours);

export default tours;