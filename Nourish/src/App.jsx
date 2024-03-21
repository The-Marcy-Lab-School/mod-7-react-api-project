import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import './App.css'
import Categories from './components/Categories';

function App () {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/categories' element={<Categories />}/> */}
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </>

  )
}

export default App
