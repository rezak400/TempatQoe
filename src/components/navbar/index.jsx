import React from 'react'
import {Link} from 'react-router-dom'
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="nav">
    
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/login">News</a></li>
        <li><a href="#contact" to="/">Contact</a></li>
        <li style={{ float: "right"}}><a class="active" href="#about">About</a></li>
      </ul>
    
    </div>
  )
}
