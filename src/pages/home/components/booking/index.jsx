import React from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';

import "./booking.css"

const { Meta } = Card;

export default function Booking() {
  return (
    <div className="book">
      <h1>BOOKING SEKARANG !!</h1>
      <div className="gallery">
        <Row type="flex" justify="space-around" className="baris">
            <Col span={6}>
            <div className="card">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://loremflickr.com/cache/resized/842_43504444412_928df5700f_320_240_nofilter.jpg" />}
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
                    cover={<img alt="example" src="https://loremflickr.com/cache/resized/842_43504444412_928df5700f_320_240_nofilter.jpg" />}
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
                    cover={<img alt="example" src="https://loremflickr.com/cache/resized/842_43504444412_928df5700f_320_240_nofilter.jpg" />}
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
                    cover={<img alt="example" src="https://loremflickr.com/cache/resized/842_43504444412_928df5700f_320_240_nofilter.jpg" />}
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
                    cover={<img alt="example" src="https://loremflickr.com/cache/resized/842_43504444412_928df5700f_320_240_nofilter.jpg" />}
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
                    cover={<img alt="example" src="https://loremflickr.com/cache/resized/842_43504444412_928df5700f_320_240_nofilter.jpg" />}
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
  )
}
