import express from "express";
import todosRouter from "./routers/todoRouter"
import dbconfig from "./startup/dbConnect"
import cors from "cors"


const app = express();
app.use(express.json());
app.use(cors());
dbconfig();



app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.use("/todos", todosRouter)

app.listen(3000, ()=> {
    console.log("Server running on port 3000");
})