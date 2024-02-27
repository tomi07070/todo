import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
import Delete from './pages/Delete'


function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        <Route path='/update' element={<Update></Update>}></Route>
        <Route path='/delete' element={<Delete></Delete>}></Route>
    </Routes>
    </>
  )
}

export default App