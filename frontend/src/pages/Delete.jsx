import React from 'react'
import { useState,  } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const Delete = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  const HandleDeleteTodo = () => {
    setLoading(true)
    axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then(()=> {
        setLoading(true)
        navigate('/')
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }

  return (
    <>
      <div>
        <div><h1>Are you shure you want to delete this Todo?</h1></div>
        <div>
          <button onClick={HandleDeleteTodo}>
            delete
          </button>
        </div>
      </div>
    </>
  )
}

export default Delete