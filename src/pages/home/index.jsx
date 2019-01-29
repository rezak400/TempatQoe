import React from 'react'
import './home.css'
import Header from './components/header';
import Slider from './components/slider'
import Button from './components/button';
import About from './components/about';
import Booking from './components/booking'
import WOW from 'wowjs';


export default class Home extends React.Component{
  componentDidMount() {
    new WOW.WOW().init();
  }

  render(){
  return (
    <div className="home">
        <div className="atas">
          <Header />  
          <Button />
            <br/>
            <br/> 
            <br/>
          <Slider />
        </div>
          <About />
          <br/>
          <Button />
          <br/>
          <Booking />  
    </div>
  )
}
}
