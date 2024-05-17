import './App.css'
import { Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import IsAnon from './components/IsAnon'


function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
        <Route exact path='/signup' element={<IsAnon><SignupPage /></IsAnon>} />
      </Routes>
    </>
  )
}

export default App
