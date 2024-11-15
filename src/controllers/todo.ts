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
        const count = await TodoModel.countDocuments({}) + 1
        await TodoModel.create({ id: count, title, ...rest })
        return res.status(201).json({ message: 'todo created successfully' })
    }
    return res.status(422).json({ message: "todo is exist" })
}
export const editTodo = async (req: any, res: any) => {
    const { id } = req.params
    const data = req.body
    const newTodo = await TodoModel.findOneAndUpdate({ id: id }, { ...data })
    if (newTodo) {
        return res.status(200).json({ message: "todo updated successfully" })
    }
    return res.status(422).json({ message: "todo not found" })

}
export const deleteTodo = async (req: any, res: any) => {
    const { id } = req.params
    const isExist = await TodoModel.findOne({ id: id })
    if (isExist) {
        await TodoModel.deleteOne({ id: id })
        return res.status(200).json({ message: "todo deleted successfully" })
    }
    return res.status(422).json({ message: "todo not found" })

}
export const getTodo = async (req: any, res: any) => {
    const { id } = req.params;
    const todo = await TodoModel.findOne({ id: id })
    if (todo) {
        return res.status(200).json(todo)
    }
    return res.status(422).json({ message: "todo not found" })

}
// export const filterTodo = async (req: any, res: any) => {
//     const { category } = req.params;
//     const todos = await TodoModel.find({ category: category })
//     if (todos.length) {
//         return res.status(200).json(todos)

//     }
//     return res.status(422).json({ message: "there are not todos in this category" })
// }