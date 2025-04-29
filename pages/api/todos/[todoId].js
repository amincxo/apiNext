import { todos } from "../../../data/todos";

export default function handler (req , res) {
    if(req.method = 'GET'){

        const {todoId} = req.query;
        const todo = todos.find(todo => todo.id === +todoId )
        res.status(200).json(todo);
    }
}