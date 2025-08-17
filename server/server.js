import express from "express";
import cors from "cors";
import pool from "./config/db.js";
import popularTours from "./routes/popularTours.routes.js";
import popularTreks from "./routes/popularTreks.routes.js";
import testimonials from "./routes/testimonials.routes.js";
import search from "./routes/search.routes.js";
import tours from "./routes/tours.routes.js";
import treks from "./routes/treks.routes.js";
import packageByType from "./routes/package.routes.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use("/api",popularTours);
app.use("/api",popularTreks);
app.use("/api",testimonials);
app.use("/api",search);
app.use("/api",tours);
app.use("/api",treks);
app.use("/api",packageByType);


const server = app.listen(port,()=>{
    console.log("Server Running At localhost:"+port)
})

let isShuttingDown = false;

process.on("SIGINT", async () => {
    if (isShuttingDown) return; // ✅ prevent multiple calls
    isShuttingDown = true;
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