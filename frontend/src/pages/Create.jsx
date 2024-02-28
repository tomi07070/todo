import React from 'react'
import BackButton from '../components/BackButton'
import { useState } from 'react'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'


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
            navigate('/')
            console.log("it worked")
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
      <div className='flex justify-center'>
        <div className='absolute left-10 top-5'>
          <BackButton/>
        </div>
        <div className=''>
          <form className='mt-[100px] border-2 border-white xl:w-[400px] w-[300px] h-[400px]'>
            <div className='mb-[30px] xl:ml-[100px] ml-[50px] mt-[20px]'>
              <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Title'
                className=' text-white placeholder:text-white p-2 rounded-xl'
                 />
            </div>
            <div className='mb-[30px] xl:ml-[100px] ml-[50px]'>
              <input 
                type="text" 
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder='Description'
                className=' text-white placeholder:text-white p-2 rounded-xl'
              />
            </div>
            <div className='mb-[30px] xl:ml-[100px] ml-[50px]'>
              <input 
                type='date'
                value={expires}
                onChange={(e) => setExpires(e.target.value)}
                placeholder='Expires'
                className=' text-white placeholder:text-white p-2 rounded-xl w-[200px]' 
              />
            </div>
            <div className='flex justify-center'>
              <Link to='/'>
                <button type="submit" className='btn btn-outline btn-success' onClick={HandleSaveTodo}>
                  Create
                </button>
              </Link>
             
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Create