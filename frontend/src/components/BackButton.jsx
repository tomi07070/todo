import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = () => {
  return (
    <>
        <div>
            <Link to='/'><i class="fa-solid fa-arrow-left"></i></Link>
        </div>
    </>
  )
}

export default BackButton