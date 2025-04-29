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
            message: 'create sucsefuly',
            data : newTodo
        })
    } else if (req.method === 'DELETE') {
        // delete all todos
        res.status(200).json({
            message: 'all todos deleted',
            data: []
        })
    } else if(req.method === 'PUT'){
       //replace all data
        res.status(200).json({
            message: 'all data replace',
            data: req.body
        })
    }

}