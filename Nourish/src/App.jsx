import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import './App.css'

function App () {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </>

  )
}

export default App
