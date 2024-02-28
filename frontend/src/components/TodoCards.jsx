import React from 'react'
import TodoSingleCard from './TodoSingleCard'

const TodoCards = ({todos}) => {
  return (
    <>
      <div className='grid xl:grid-cols-3 gap-4 mt-[150px] md:ml-[200px] xl:ml-[50px] ml-[20px]'>
        {todos.map((item) =>(
          <TodoSingleCard key={item._id} todo={item}/>
        ))}
      </div>
    </>
  )
}

export default TodoCards