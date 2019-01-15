import React from 'react'
import "./header.css"
import logo from "./logo.png"

export default function Header() {
  return (
    <div className="header">
      <div className="gambar">
      <img class="wow bounceInUp"width={300} src={logo} alt=""/>
      </div>
      <p>Website peminjaman ruangan SMK NEGERI 1 Kota Bekasi</p>
    </div>
  )
}
