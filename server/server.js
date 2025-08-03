import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import popularTours from "./routes/popularTours.routes.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors({
    origin : "http://localhost:5173"
}));

app.use(express.urlencoded({extended:true}));

app.use("/api",popularTours)

app.listen(port,()=>{
    console.log("Server Running At localhost:"+port)
})