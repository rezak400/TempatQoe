import React from 'react'
import Slider from './components/slider'
import Header from './components/header';
import './home.css'
import Button from './components/button';


export default function Home() {
  return (
    <div>
        <div className="atas">
          <Header />  
          <Button />
          <br/>
          <Slider />
        </div>
      halaman home
    </div>
  )
}
