import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import router from "./routes/popularTours.routes.js";
import pool from "./config/db.js";
import { Server } from "http";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use("/api",router)
const server = app.listen(port,()=>{
    console.log("Server Running At localhost:"+port)
})

process.on("SIGINT", async () => {
    console.log("\nReceived SIGINT. Initiating graceful shutdown...");
    try {
        server.close(() => {
            console.log("HTTP server closed.");
        });
        await pool.end(); // Closes PostgreSQL pool
        console.log("Database pool closed.");
    } catch (err) {
        console.error("Error during shutdown:", err);
    } finally {
        process.exit(0);
    }
});