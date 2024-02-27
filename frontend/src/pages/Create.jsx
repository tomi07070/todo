import React from 'react'
import BackButton from '../components/BackButton'
import { useState } from 'react'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const Create = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [expires, setExpires] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const HandleSaveTodo = () => {
    
    const data = {
      title,
      desc,
      expires
    }
    
    setLoading(true)
    axios
      .post("http://localhost:5000/create-todo", data)
      .then(()=>{
        setLoading(false)
        console.log("todo created succesfully")
        toast.success('Todo created succesfully')
        setTimeout(()=> {
          try {
            navigate('/')
            console.log("it worked")
          } catch (error) {
            console.log(error)

          }
        }, 2000)
      })
      .catch((err)=>{
        setLoading(false)
        console.log(err)
        toast.error("This didn't work.")
      })
  }

  return (
    <>
      <Toaster/>
      <div>
        <div>
          <BackButton/>
        </div>
        <div>
          <form>
            <div>
              <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                 />
            </div>
            <div>
              <input 
                type="text" 
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div>
              <input 
                type='date'
                value={expires}
                onChange={(e) => setExpires(e.target.value)} 
              />
            </div>
            <div>
              <button type="submit" onClick={HandleSaveTodo}>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Create