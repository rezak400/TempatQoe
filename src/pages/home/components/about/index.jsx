import React from 'react'
import { Row, Col } from 'antd';
import "./about.css"

export default function About() {
  return (
    <div className="container-about">
      <h1>Apa yang bisa kamu booking?</h1>
      <p>Disini kamu bisa membooking ruangan yang ada di SMK NEGERI 1</p>
      <Row>
          <Col span={10} offset={2}>
            <div className="card">
            a
            </div>
          </Col>
          <Col span={10}>
            <div className="card">
            a
            </div>
          </Col>
      </Row>
      <Row>
          <Col span={10} offset={2}>
            <div className="card">
            a
            </div>
          </Col>
          <Col span={10}>
            <div className="card">
            a
            </div>
          </Col>
      </Row>
      
    </div>
  )
}
