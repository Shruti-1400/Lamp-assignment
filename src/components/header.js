import React from 'react'
import './header.css'

const header = () => {
  return (
    <nav className='main-nav'>
        <div className="nav-bar">
            <ul>
                <li>Home</li>
                <li>Our Products</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default header