import React from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/AboutPage'
import FlowerPage from './Pages/FlowerPage'
import LoginPage from './Pages/LoginPage'
import i18n from './i18n'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/Contact' Component={Contact} />
        <Route path='/AboutPage' Component={About} />
        <Route path='/FlowerPage' Component={FlowerPage} />
        <Route path='/Login' Component={LoginPage} />
      </Routes>
    </Router>
    
  )
}

export default App