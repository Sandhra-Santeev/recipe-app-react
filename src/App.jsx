
import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import Nav from './components/Nav'
import Recipe from './components/Recipe'
import { Route, Routes } from 'react-router-dom'

function App() {
  
  
 const [foodData,setFoodData] = useState([])

  return (
    <>
    <Nav/>
    
    <Routes>
      <Route path="/" element={<Search foodData={foodData} setFoodData={setFoodData} />}/>
      <Route path="/recipe/:id" element={<Recipe foodData={foodData} />} />
      
    </Routes>
      
    </>
  )
}

export default App
