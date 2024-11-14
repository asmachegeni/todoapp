import TodoModel from './../models/todo.js'
export const getAllTodo = async (req: any, res: any) => {
    const todos = await TodoModel.find({})
    if (todos.length) {
        return res.json(todos)
    }
    return res.json([])
}
export const createTodo = async (req: any, res: any) => {
    const { title, ...rest } = req.body;
    const isExist = await TodoModel.findOne({ title })
    if (!isExist) {
        await TodoModel.create({ title, ...rest })
        return res.status(201).json({ message: 'todo created successfully' })
    }
    return res.status(422).json({ message: "todo is exist" })
}
export const editTodo = (req: any, res: any) => {

}
export const deleteTodo = async (req: any, res: any) => {
    const { title } = req.params
    const isExist = await TodoModel.findOne({ title: title })
    if (isExist) {
        await TodoModel.deleteOne({ title: title })
        return res.status(200).json({ message: "todo deleted successfully" })
    }
    return res.status(422).json({ message: "todo not found" })

}
export const getTodo = (req: any, res: any) => {

}
export const filterTodo = (req: any, res: any) => {

}