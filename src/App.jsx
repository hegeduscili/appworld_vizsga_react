import { useState } from 'react'
import './App.css'
import Register from './components/Register'
import { Routes,Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>  
    <Routes>
      <Route index element = { <Register />}></Route>
    </Routes>
    </div>
  )
}

export default App
