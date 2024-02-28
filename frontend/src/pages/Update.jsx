import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

 const Update = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [expires, setExpires] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const  { id }= useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/todos/${id}`)
    .then((res) => {
        setTitle(res.data.title);
        setDesc(res.data.desc)
        setExpires(res.data.expires)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [])
  
  const handleEditTodo = () => {
    const data = {
      title,
      desc,
      expires,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5000/todos/update/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <h1 className='text-3xl my-4'>Edit Todo</h1>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl md:w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Description</label>
          <input
            type='text'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Expires</label>
          <input
            type='date'
            value={expires}
            onChange={(e) => setExpires(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 text-black m-8' onClick={handleEditTodo}>
          Save
        </button>
      </div>
    </div>
  )
}

export default Update