import getSearch from "../controllers/search.controller.js";
import { Router } from "express";

const search = Router();

search.get("/search",getSearch);

export default search;
