import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./navbar.css"

export default class Navbar extends Component {
  constructor() {
    super();

    this.state = {
        openDrawer : false
    };
  };
      
  // changeVar = ()=>{
  //     this.setState({ openDrawer: !this.state.openDrawer})
  //     console.log(this.state.openDrawer)
  // }
  
  render(){

  let changeVar = () => {
    this.setState({ openDrawer : !this.state.openDrawer})
  }
   
  return (
    <div className="nav">
        
        <div className={this.state.openDrawer ? 'topnav responsive' : 'topnav'} id="myTopnav">
          <Link to="/">Home</Link>
          <Link to="/booking">Booking</Link>
          <Link className="login-kanan" to="/form">Login</Link>
          
          {/* <div class="dropdown">
            <button class="dropbtn">Dropdown 
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div> */}
          
          
          <a style={{fontSize:"17px"}} class="icon" onClick={changeVar}>&#9776;</a>
        </div>

       
    
    </div>
  )
}
}