import getPackage from "../controllers/package.controller.js";
import { Router } from "express";

const packageByType = Router();

packageByType.get("/:type/:id",getPackage);

export default packageByType;