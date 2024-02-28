import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = () => {
  return (
    <>
        <div>
            <Link to='/'><i className="fa-solid fa-arrow-left text-3xl"></i></Link>
        </div>
    </>
  )
}

export default BackButton