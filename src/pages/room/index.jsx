import React, { Component } from 'react'
import { Row, Col } from "antd"
import { Input } from 'antd';
import Logo from './akun-1.png'
import { Link } from "react-router-dom"
import "./room.css";
import { Collapse } from 'antd';
import { Cascader } from 'antd'
import { Card } from 'antd';
import WOW from 'wowjs';

const { Meta } = Card;
const Panel = Collapse.Panel;
const options = [{
    value: 'gedungA',
    label: "Gedung A",
    },{
    value: "gedungB",
    label: "Gedung B"
    }];
  
  function onChange(value) {
    console.log(value);
  }


export default class Room extends Component {

    componentDidMount() {
        new WOW.WOW().init();
      }

  render() {
    return (
      <div className="ruangan">
      <div className="warna">
        {/* <div className="atas">
            header
        </div> */}
        <div className="cari">
            <Row>
                <Col md={20}>
                    <div className="navbar">
                        <ul>
                            <li><Link to="#" >Ruangan Kelas</Link></li>
                            <li><Link to="#" >Lapangan</Link></li>
                            <li><Link to="#" >Masjid</Link></li>
                        </ul>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="option">
                    <Cascader size="medium" options={options} onChange={onChange} placeholder="Urutkan Berdasarkan" className="tengah"/>
                    </div>
                </Col>
            </Row>
        </div>
        <div className="main-ruangan" >
            <div className="effect" class="wow fadeInUp">
            <div className="konten">
                <Row >
                    <Col sm={12} md={6} className="kolom">
                        <Card
                                    hoverable
                                    style={{ width : 265 }}
                                    cover={<img alt="example" src={Logo} />}
                                    className="tengah"
                                >
                                    <Meta
                                    title="Ruangan"
                                    description="SMKN 1"
                                    />
                        </Card>
                    </Col>
                    <Col sm={12} md={6} className="kolom">
                        <Card
                                        hoverable
                                        style={{ width : 265 }}
                                        cover={<img alt="example" src={Logo} />}
                                        className="tengah"
                                    >
                                        <Meta
                                        title="Ruangan"
                                        description="SMKN 1"
                                        />
                        </Card>
                    </Col>
                    <Col sm={12} md={6} className="kolom">
                        <Card
                                    hoverable
                                    style={{ width : 265 }}
                                    cover={<img alt="example" src={Logo} />}
                                    className="tengah"
                                >
                                    <Meta
                                    title="Ruangan"
                                    description="SMKN 1"
                                    />
                        </Card>
                        
                    </Col>
                    <Col sm={12} md={6} className="kolom">
                        <Card
                                    hoverable
                                    style={{ width : 265 }}
                                    cover={<img alt="example" src={Logo} />}
                                    className="tengah"
                                >
                                    <Meta
                                    title="Ruangan"
                                    description="SMKN 1"
                                    />
                        </Card> 
                    </Col>
                    <Col sm={12} md={6} className="kolom">
                        <Card
                                    hoverable
                                    style={{ width : 265 }}
                                    cover={<img alt="example" src={Logo} />}
                                    className="tengah"
                                >
                                    <Meta
                                    title="Ruangan"
                                    description="SMKN 1"
                                    />
                        </Card>
                    </Col>
                    <Col sm={12} md={6} className="kolom">
                        <Card
                                        hoverable
                                        style={{ width : 265 }}
                                        cover={<img alt="example" src={Logo} />}
                                        className="tengah"
                                    >
                                        <Meta
                                        title="Ruangan"
                                        description="SMKN 1"
                                        />
                        </Card>
                    </Col>
                    <Col sm={12} md={6} className="kolom">
                        <Card
                                    hoverable
                                    style={{ width : 265 }}
                                    cover={<img alt="example" src={Logo} />}
                                    className="tengah"
                                >
                                    <Meta
                                    title="Ruangan"
                                    description="SMKN 1"
                                    />
                        </Card>
                        
                    </Col>
                    <Col sm={12} md={6} className="kolom">
                        <Card
                                    hoverable
                                    style={{ width : 265 }}
                                    cover={<img alt="example" src={Logo} />}
                                    className="tengah"
                                >
                                    <Meta
                                    title="Ruangan"
                                    description="SMKN 1"
                                    />
                        </Card> 
                    </Col>
                </Row>
            </div>
            </div>
            
        </div>
        </div>
      </div>
    )
  }
}
