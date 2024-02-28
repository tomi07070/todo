import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';

const TodoSingleCard = ({todo}) => {
    const formattedDate = moment(todo.expires).format('DD-MM-YYYY');

    return (
    <>
    <div className='border-2 border-white md:w-[400px] w-[300px]'>

        <div className="card w-90 md:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{todo.title}</h2>
                <p>{todo.desc}</p>   
        <div>
            <Link to='/update'><i className="fa-solid fa-pen-to-square btn btn-info"></i></Link>
            <Link to='/delete'><i className="fa-solid fa-trash btn m-4 btn-error"></i></Link>
        </div>
        <div className="card-actions justify-end">
            <button className="span">{formattedDate}</button>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default TodoSingleCard