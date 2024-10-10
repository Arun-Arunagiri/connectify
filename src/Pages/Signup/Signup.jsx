import React from 'react'
import './Signup.css'
import img2 from "../../assets/img2.svg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer';

const Signup = () => {
  return (
    <div className="signup">
      <Navbar />

      <div className="main">
        <div className="right-signup">
          <h1>signup</h1>
          <div className="inputs">
          <input type="text" placeholder="Enter Username" />
          <input type="email" placeholder="Enter Email id" />
          

          <input type="password" placeholder="Enter Password" />
          <input type="password" placeholder="Enter confirm Password" />
          

          </div>

          <div className="buttons">
            <button className="clear-btn">Clear</button>
            <button className="submit-btn">Signup</button>
          </div>
        </div>
        <div className="left-signup">
          <img src={img2} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Signup