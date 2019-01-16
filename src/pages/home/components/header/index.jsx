import React from 'react'
import "./header.css"
import logo from "./logo.png"
import WOW from 'wowjs';

export default function Header() {
  // componentDidMount() {
  //   new WOW.WOW().init();
  // }
  return (
    <div className="header">
      <div className="gambar">
      <img className="wow rubberBand" width={300} src={logo} alt=""/>
      </div>
      <p>Website peminjaman ruangan SMK NEGERI 1 Kota Bekasi</p>
    </div>
  )
}


