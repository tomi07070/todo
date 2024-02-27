import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import TodoCard from '../components/TodoCard'


const Home = () => {
  const [loading, setLoading] = useState(false)
  const [todos, setTodos] = useState([])
    return (
    <>
        <div className='flex justify-end mr-10 mt-5'>
            <Link to={'/create'}><i className="fa-solid fa-plus text-3xl"></i></Link>
        </div>
    </>
  )
}

export default Home