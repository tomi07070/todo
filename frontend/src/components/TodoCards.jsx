import React from 'react'
import TodoSingleCard from './TodoSingleCard'

const TodoCards = ({todos}) => {
  return (
    <>
      <div>
        {todos.map((item) =>(
          <TodoSingleCard key={item._id} todo={item}/>
        ))}
      </div>
    </>
  )
}

export default TodoCards