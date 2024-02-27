import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';

const TodoSingleCard = ({todo}) => {
  
    const formattedDate = moment(todo.expires).format('DD-MM-YYYY');

    return (
    <>
        <div>
            <div>
                <h1>{todo.title}</h1>
            </div>
            <div>
                <p>{todo.desc}</p>
            </div>
            <div>
                <p>{formattedDate}</p>
            </div>
            <div>
                <Link to='/update'><i class="fa-solid fa-pen-to-square"></i></Link>
                <Link to='/delete'><i class="fa-solid fa-trash"></i></Link>
            </div>
        </div>
    </>
  )
}

export default TodoSingleCard