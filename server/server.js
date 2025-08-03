import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));

app.get("/",()=>{
    console.log("GET request targeted")
});

app.listen(port,()=>{
    console.log("Server Running At localhost:"+port)
})