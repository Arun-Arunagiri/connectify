import React from 'react'
import './Navbar.css'
import img from '../../assets/logo.svg'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-header">
                <img src={img} alt="" />
                <h2>CONNECTIFY</h2>
            </div>
            <div className="navbar-right">
                <ul className='navbar-menu'>
                    <li>Home</li>
                    <li>Features</li>
                    <li>About</li>
                    {/* <li>Community</li> */}
                </ul>
                <div className="navbar-button">
                    <button>LOGIN</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar