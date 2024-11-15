import express from "express";
import { createTodo, deleteTodo, editTodo, getAllTodo, getTodo } from "../controllers/todo.js";
import ValidationMiddleware from "../middlewares/validation-middleware.js";
import TodoSchema from "../validators/todo-schema.js";
const router = express.Router()
router.get('/', getAllTodo)
router.get('/:id', getTodo)
router.post('/', ValidationMiddleware(TodoSchema), createTodo)
router.put('/:id', editTodo)
router.delete('/:id', deleteTodo)
// router.get('/:category', filterTodo)
export default router