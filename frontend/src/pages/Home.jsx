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
        <div className=' mr-10 mt-7 absolute top-0 xl:left-[1400px] md:left-[750px] left-[270px]'>
            <Link to={'/create'}><i className="fa-solid fa-plus text-5xl"></i></Link>
        </div>
    </>
  )
}

export default Home