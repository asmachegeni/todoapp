import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
    id: {
        type: 'number'
    },
    title: {
        type: 'string',
        required: true
    },
    date: {
        type: 'Date',
    },
    category: {
        type: "string",
        default: "All"
    },
    color: {
        type: "string"
    },
    state: {
        type: "string"
    }
})
const model = mongoose.model("Todo", TodoSchema)
export default model;