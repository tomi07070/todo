import  express  from "express";
import { CreateTodo, DeleteTodo, GetTodo, UpdateTodo } from '../controlers/todo.controler.js'

const router = express.Router()

router.post("/create-todo", CreateTodo)
router.get("/todos", GetTodo)
router.put("/update/:id", UpdateTodo)
router.delete("/delete/:id", DeleteTodo)


export default router