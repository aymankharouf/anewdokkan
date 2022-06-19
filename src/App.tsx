import { App as KonstaApp } from 'konsta/react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'

const App = () => {
  return (
    <KonstaApp theme="ios" safeAreas>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  </KonstaApp>
  )
}

export default App
