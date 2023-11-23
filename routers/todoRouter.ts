import {Router} from "express"
import Todo from "../models/todo";

const todosRouter = Router();


todosRouter.get("/", async (req, res)=>{
    try {
        const todos = await Todo.find();
        res.send(todos);  
    } catch (error) {
        res.json({message: "Error fetching todos: " + error})
    }
});

todosRouter.post("/", async (req, res) =>{
    const todo = new Todo({
        title: req.body.title
    })
    try {
        const savedTodo = await Todo.create(todo);
        res.send(savedTodo);
    } catch (error) {
        res.json({message: "Error creating todo: " + error})
    }

})

todosRouter.delete("/:id", async (req, res) =>{
    try {
        const removedTodo = await Todo.findByIdAndDelete({_id: req.params.id})
        res.send(removedTodo);
    } catch (error) {
        res.json({message: "Error deleting todo: " + error})

    }
})


export default todosRouter