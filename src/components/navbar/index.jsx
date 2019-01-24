import React from 'react'
import {Link} from 'react-router-dom'
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="nav">
    
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">Login</Link></li>
        <li><Link to="">Contact</Link></li>
        <li style={{ float: "right"}}><a class="active" href="#about">About</a></li>
      </ul>
    
    </div>
  )
}
