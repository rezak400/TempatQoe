import React from 'react'
import Slider from './components/slider'
import Header from './components/header';

import Button from './components/button';
import Booking from './components/booking'
import About from './components/about';
import './home.css'


export default function Home() {
  return (
    <div>
        <div className="atas">
          <Header />  
          <Button />
            <br/>
            <br/> 
            <br/>
          <Slider />
        </div>
        {/* <div className="divide">
            a
        </div> */}
          <About />
          <br/>
          <Button />
          <br/>
        
          <Booking />
          <br/>
          
        
    </div>
  )
}
