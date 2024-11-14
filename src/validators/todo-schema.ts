import Joi from "joi";

const TodoSchema = Joi.object({
    title: Joi.string().max(150).required(),
    date: Joi.date(),
    category: Joi.string(),
    color: Joi.string(),
    state: Joi.string()
})
export default TodoSchema
