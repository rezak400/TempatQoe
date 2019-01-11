import React from 'react'
import Slider from './components/slider'
import Header from './components/header';
import './home.css'
import Button from './components/button';
import Booking from './components/booking'
import About from './components/about';


export default function Home() {
  return (
    <div>
        <div className="atas">
          <Header />  
          <Button />
          <br/>
          <Slider />
         
        </div>
        <div className="divide">
            a
        </div>
          <About />
          <Button />
        
          <Booking />
          <br/>
          
        
    </div>
  )
}
