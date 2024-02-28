import  express  from "express";
import { CreateTodo, DeleteTodo, GetOneTodo, GetTodo, UpdateTodo } from '../controlers/todo.controler.js'

const router = express.Router()

router.post("/create-todo", CreateTodo)
router.get("/todos", GetTodo)
router.get("/todos/:id", GetOneTodo)
router.put("todos/update/:id", UpdateTodo)
router.delete("todos/delete/:id", DeleteTodo)


export default router