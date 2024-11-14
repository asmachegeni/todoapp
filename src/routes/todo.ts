import express from "express";
import { createTodo, deleteTodo, editTodo, filterTodo, getAllTodo, getTodo } from "../controllers/todo.js";
import ValidationMiddleware from "../middlewares/validation-middleware.js";
import TodoSchema from "../validators/todo-schema.js";
const router = express.Router()
router.get('/', getAllTodo)
router.get('/:id', getTodo)
router.post('/', ValidationMiddleware(TodoSchema), createTodo)
router.put('/', editTodo)
router.delete('/:title', deleteTodo)
router.get('/:id', filterTodo)
export default router