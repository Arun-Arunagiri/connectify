import React from 'react'
import './App.css'
import Home from './Pages/Homepage/Home'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Mainpage from './Pages/Mainpage/Mainpage'

const App = () => {
  return (
    <div>
      <Home/>
      {/* <Login/> */}
      <Signup />
      {/* <Mainpage/> */}
    </div>
  )
}

export default App