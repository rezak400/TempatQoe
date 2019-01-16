import React from 'react'
import {Link} from 'react-router-dom'
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="nav">
    
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><a href="/">home2</a></li>
        <li><a href="#contact" to="/">Contact</a></li>
        <li style={{ float: "right"}}><a class="active" href="#about">About</a></li>
      </ul>
    
    </div>
  )
}
