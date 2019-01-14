import React from 'react';
import { Row, Col } from 'antd';
import "./about.css"


  

export default function About() {
    


  return (
    <div className="container-about">
      <div className="head">
        <h1>Bagaimana cara booking ?</h1>
        <p>Disini kamu bisa membooking ruangan yang ada di SMK NEGERI 1</p>
      </div>
      <div className="tutor">
            <Row>
                <Col span={10} offset={2}>
                    <div className="card" >
                    <h2 class="wow flipInY">Buat akun Tempatqoe</h2>
                    </div>
                </Col>
                <Col span={10}>
                    <div className="card">
                    <h2>Buat akun Tempatqoe</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={10} offset={2}>
                    <div className="card">
                    <h2>Buat akun Tempatqoe</h2>
                    </div>
                </Col>
                <Col span={10}>
                    <div className="card">
                    <h2>Buat akun Tempatqoe</h2>
                    </div>
                </Col>
            </Row>
      </div>
      
    </div>
  )
}
