import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
      < Route path='/' element={<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
