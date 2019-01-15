import React from 'react';
import { Row, Col } from 'antd';
import "./about.css"
import Logo from "./akun-1.png"

  

export default function About() {
    


  return (
    <div className="container-about">
        <div className="head">
            <h1>Bagaimana cara booking ?</h1>
            <p>Disini kamu bisa membooking ruangan yang ada di SMK NEGERI 1</p>
        </div>
        <div className="tutorial">
                <div className="baris" >
                    <Row>
                        <Col span={16} >
                            <div className="card" >
                            <h2>Buat akun Tempatqoe</h2>
                            <p>Kamu bisa membuat akun tempatqoe dengan meng-klik gambar disamping</p>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="card">
                            <img src={Logo} alt=""/>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="baris" >
                    <Row>
                        <Col span={16} >
                            <div className="card" >
                            <h2>Pergi ke halaman Booking</h2>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="card">
                            <img src={Logo} alt=""/>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="baris" >
                    <Row>
                        <Col span={16} >
                            <div className="card" >
                            <h2>Pilih ruangan/tempat yang ingin anda booking, serta tentukan jadwalnya :D</h2>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="card">
                            <img src={Logo} alt=""/>
                            </div>
                        </Col>
                    </Row>
                </div>       
        </div>
    </div>
  )
}
