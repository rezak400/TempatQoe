import React from 'react'
import { Button as Tombol} from 'antd';
import { Row, Col } from "antd";
import "./button.css"

export default function Button() {
  return (
    <div>
        <div className="container-button">
        <Row type="flex" justify="space-around">
            
                <Col span={10} >
                    <Tombol type="primary" block>BOOKING SEKARANG</Tombol>
                </Col>
                <Col span={10} >
                    <Tombol type="primary" block>LOGIN / REGISTER</Tombol>
                </Col>
            
        </Row>
        </div>
    </div>
  )
}
