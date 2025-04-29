import React from 'react'
import { todos } from '../data/todos'

function Todos({data}) {
  return (
    <div>
        {data.map((todo )=> (<h1 key={todo.id} > {todo.title} </h1>))}
    </div>
  )
}

export default Todos

export async function getStaticProps() {
    // const res = await fetch('/api/todos')
    // const data = await res.json();
    return {
        props: {
            data : todos
        },
    }
}