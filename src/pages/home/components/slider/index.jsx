import React from 'react'
import { Carousel } from 'antd';
import "./slider.css"
import { Row, Col } from 'antd';
import gambar from "./book.jpg"

export default function Slider() {
  return (
    <div>
        <Row>
            <Col span={20} offset={2}>
                <Carousel autoplay>
                    <img height={300} width={900} src={gambar} alt=""/>
                    <img height={300} width={900} src={gambar} alt=""/>
                    <img height={300} width={900} src={gambar} alt=""/>
                </Carousel>
            </Col>
        </Row>
    </div>
  )
}
