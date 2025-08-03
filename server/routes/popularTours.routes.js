import { Router } from "express";
import getPopularTours from "../controllers/popularTours.controller";

const router = Router();

router.get("/",getPopularTours);

export default router;