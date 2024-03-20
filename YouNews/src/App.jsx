import { useState } from 'react'
import NavBar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import TrendingArticles from './components/TrendingArticles';
import TrendingArticleCarousel from './components/TrendingArticleCarousel';
'../TrendingArticles.css'
function App() {

  return (
    <>
     <NavBar> </NavBar>
     <br></br>
     <TrendingArticleCarousel></TrendingArticleCarousel>
    </>
  )
}

export default App
