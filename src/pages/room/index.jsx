import React, { Component } from 'react'
import { Row, Col } from "antd"
import { Input } from 'antd';
import { Card } from 'antd';
import Logo from './akun-1.png'
import "./room.css";

const { Meta } = Card;


export default class Room extends Component {

    
  render() {
    return (
      <div className="ruangan">
        <div className="atas">
            <h1>Cari RuanganMu</h1>
        </div>
        <div className="search">
            <Row>
                <Col md={24}>
                <Input size="large" placeholder="Cari Ruanganmu Disini" />
                </Col>
            </Row>
        </div>
        <div className="room-gallery">
        <Row>
            <Col lg={8} md={12}>
                <div className="card">
                    
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={Logo} />}
                        className="tengah"
                    >
                        <Meta
                        title="Ruangan"
                        description="SMKN 1"
                        />
                    </Card>
                </div>
            </Col>
            <Col lg={8} md={12}>
                <div className="card">
                    
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={Logo} />}
                        className="tengah"
                    >
                        <Meta
                        title="Ruangan"
                        description="SMKN 1"
                        />
                    </Card>
                </div>
            </Col>
            <Col lg={8} md={12}>
                <div className="card">
                    
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={Logo} />}
                        className="tengah"
                    >
                        <Meta
                        title="Ruangan"
                        description="SMKN 1"
                        />
                    </Card>
                </div>
            </Col>
            <Col lg={8} md={12}>
                <div className="card">
                    
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={Logo} />}
                        className="tengah"
                    >
                        <Meta
                        title="Ruangan"
                        description="SMKN 1"
                        />
                    </Card>
                </div>
            </Col>
            <Col lg={8} md={12}>
                <div className="card">
                    
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={Logo} />}
                        className="tengah"
                    >
                        <Meta
                        title="Ruangan"
                        description="SMKN 1"
                        />
                    </Card>
                </div>
            </Col>
            <Col lg={8} md={12}>
                <div className="card">
                    
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={Logo} />}
                        className="tengah"
                    >
                        <Meta
                        title="Ruangan"
                        description="SMKN 1"
                        />
                    </Card>
                </div>
            </Col>
            <Col lg={8} md={12}>
                <div className="card">
                    
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={Logo} />}
                        className="tengah"
                    >
                        <Meta
                        title="Ruangan"
                        description="SMKN 1"
                        />
                    </Card>
                </div>
            </Col>
            <Col lg={8} md={12}>
                <div className="card">
                    
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={Logo} />}
                        className="tengah"
                    >
                        <Meta
                        title="Ruangan"
                        description="SMKN 1"
                        />
                    </Card>
                </div>
            </Col>
            <Col lg={8} md={12}>
                <div className="card">
                    
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={Logo} />}
                        className="tengah"
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
}
