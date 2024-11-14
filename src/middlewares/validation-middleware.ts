import Joi from "joi"
const ValidationMiddleware = (schema: any) => {
    return (req: Request, res: any, next: any) => {
        const { error } = schema.validate(req.body);
        if (!!error) {
            const { message } = error;
            console.log("error", message);
            res.status(422).json({ error: message })
        } else {
            next();

        }
    }
}
export default ValidationMiddleware;