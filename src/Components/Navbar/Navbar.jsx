import React from 'react'
import './Navbar.css'
import votingmachine from '../../assets/voting Machine 1.png'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-header">
                <img src={img} alt="" />
                <h2>SMART EVM</h2>
            </div>
            <div className="navbar-right">
                <ul className='navbar-menu'>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Product</li>
                    <li>Community</li>
                </ul>
                <div className="navbar-button">
                    <button>Register Now</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar