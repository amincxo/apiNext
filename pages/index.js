import { useEffect, useState } from "react"


export default function Home() {

    const [todos , setTodos] = useState([])
    const [todo , setTodo] = useState([])

    useEffect(()=> {
        async function fetchData() {
            const res = await fetch('/api/todos')
            const data = await res.json()
            setTodos(data);
        }
        fetchData();
    },[])

    const clickHandler = async () => {
        const res = fetch('/api/todos', {
            method: 'POST',
            body: JSON.stringify({todo}),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await (await res).json()
        console.log(data)
    }

    const deleteHandler = async () => {
        const res = await fetch("/api/todos", {
            method: "DELETE",
        });
        const data = await res.json();
        setTodos(data.data)
    }
    const replaceHandler = async () => {
        const res = await fetch('/api/todos' , {
            method: 'PUT',
            body: JSON.stringify([
                {id: 7 , title: "todo 7"},
                {id: 8 , title: "todo 8"},
            ]),
            headers: {'Content-Type' : 'application/json'}
        })
        const data = await res.json();
        setTodos(data.data)
    }

    return (
    <>
        <h1>salam</h1>
        <ul>
            {todos.map((todo)=> (
                <li key={todo.id} >{todo.title}</li>
            ))}
        </ul>
        <div>
            <input value={todo} onChange={e => setTodo(e.target.value)} />
            <button onClick={clickHandler} >create Todo</button>
        </div>
        <div>
            <button onClick={deleteHandler}  >Delete All</button>
        </div>
        <div>
            <button onClick={replaceHandler} >REPLASE ALL</button>
        </div>
    </>
  )
}
