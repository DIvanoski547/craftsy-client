import './App.css'
import { Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={< Homepage />} />
        <Route exact path="/login" element={< LoginPage />} />
      </Routes>
    </>
  )
}

export default App
