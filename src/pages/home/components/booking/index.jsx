import React from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import "./booking.css"
import Logo from './akun-1.png'

const { Meta } = Card;

export default function Booking() {
  return (
    <div className="book">
      <h1>BOOKING SEKARANG !!</h1>
      <div className="gallery">
        <div className="effect" class="wow fadeInUp">
                <Row type="flex" justify="space-around" className="baris"  >
                    <Col span={6}>
                    <div className="card">
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={Logo} />}
                        >
                            <Meta
                            title="Ruangan"
                            description="SMKN 1"
                            />
                        </Card>
                    </div>
                    </Col>
                    <Col span={6}>
                    <div className="card">
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={Logo} />}
                        >
                            <Meta
                            title="Ruangan"
                            description="SMKN 1"
                            />
                        </Card>
                    </div>
                    </Col>
                    <Col span={6}>
                    <div className="card">
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={Logo} />}
                        >
                            <Meta
                            title="Ruangan"
                            description="SMKN 1"
                            />
                        </Card>
                    
                    </div>
                    </Col>
                </Row>
                <Row type="flex" justify="space-around" className="baris">
                    <Col span={6}>
                    <div className="card">
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={Logo} />}
                        >
                            <Meta
                            title="Ruangan"
                            description="SMKN 1"
                            />
                        </Card>
                    </div>
                    </Col>
                    <Col span={6}>
                    <div className="card">
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={Logo} />}
                        >
                            <Meta
                            title="Ruangan"
                            description="SMKN 1"
                            />
                        </Card>
                    </div>
                    </Col>
                    <Col span={6}>
                    <div className="card">
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={Logo} />}
                        >
                            <Meta
                            title="Ruangan"
                            description="SMKN 1"
                            />
                        </Card>
                    
                    </div>
                    </Col>
                </Row>
        </div>
      </div>
    </div>
  )
}
