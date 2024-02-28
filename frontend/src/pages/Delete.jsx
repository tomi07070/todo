import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Delete = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { _id } = useParams();
  console.log("ID from params:", _id);

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/todos/delete/${_id}`)
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
      <h1 className='text-3xl my-4'>Delete todo</h1>
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl xl:w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this todo?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDelete}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default Delete;