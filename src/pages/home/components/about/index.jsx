import React from 'react';
import { Row, Col } from 'antd';
import Logo from "./akun-1.png"
import "./about.css"

  

export default function About() {
    


  return (
    <div className="container-about">
        <div className="head">
            <h1>Bagaimana cara booking ?</h1>
            <p>Disini kamu bisa membooking ruangan yang ada di SMK NEGERI 1</p>
        </div>
        <div className="tutorial">
                <div className="baris">
                    <div className="efek" class="wow fadeInRight">
                    <Row>
                        <Col md={24}  lg={8}>
                            <div className="gambar">
                            <img src={Logo} alt=""/>
                            </div>
                        </Col>
                        <Col md={24} lg={16} >
                            <div className="card" >
                            <h2>Buat akun Tempatqoe</h2>
                            <p>Kamu bisa membuat akun tempatqoe dengan meng-klik gambar disamping</p>
                            </div>
                        </Col>
                    </Row>
                    </div>
                </div>
                <div className="baris" >
                    <div className="efek" class="wow fadeInLeft">
                        <Row className={'gridSwitch'}>
                            <Col    lg={8}>
                                <div className="gambar">
                                <img src={Logo} alt=""/>
                                </div>
                            </Col>
                            <Col    lg={16} >
                                <div className="card" >
                                <h2>Pergi ke halaman Booking</h2>
                                </div>
                            </Col>
                        
                        </Row>
                    </div>
                </div>
                <div className="baris" >
                    <div className="efek" class="wow fadeInRight">
                        <Row>
                            <Col md={24}  lg={8} >
                                <div className="gambar">
                                <img src={Logo} alt=""/>
                                </div>
                            </Col >
                            <Col  md={24}  lg={16} >
                                <div className="card" >
                                <h2>Pilih ruangan/tempat yang ingin anda booking, serta tentukan jadwalnya :D</h2>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>       
        </div>
    </div>
  )
}
