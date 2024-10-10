import React from 'react'
import './Mainpage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Mainpage = () => {
  return (
    <div className='mainpage'>

        <Navbar/>
        <div className="userpage">

          <div className="left">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Mainpage