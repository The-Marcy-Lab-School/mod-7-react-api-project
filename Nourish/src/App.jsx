import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";

import HomePage from './components/HomePage';


function App () {

  return (
    <>

      <Routes>
        <Route path='/' element={<HomePage />} />
       
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </>

  )
}

export default App
