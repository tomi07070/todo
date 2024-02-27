import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import TodoCard from '../components/TodoCards'


const Home = () => {
  const [loading, setLoading] = useState(false)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get("http://localhost:5000/todos")
      .then((res) => {
        setTodos(res.data.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])
    return (
    <>
      <TodoCard todos={todos}></TodoCard>
        <div className=' mr-10 mt-5 absolute top-0 left-[1450px]'>
            <Link to={'/create'}><i className="fa-solid fa-plus text-3xl"></i></Link>
        </div>
    </>
  )
}

export default Home