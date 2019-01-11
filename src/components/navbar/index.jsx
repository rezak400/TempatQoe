import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li style={{ float: "right"}}><a class="active" href="#about">About</a></li>
      </ul>
    </div>
  )
}
