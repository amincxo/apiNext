import { todos } from "../../../data/todos"

export default function (req , res) {
    if(req.method === 'GET'){
        res.status(200).json(todos)
    } else if (req.method === 'POST') {
        const {todo} = req.body;
        //store data in db
        const newTodo = {
            id : todos.length +1 ,
            title: todo,
        };
        res.status(201).json({
            message: 'create ucsefuly',
            data : newTodo
        })
    }

}