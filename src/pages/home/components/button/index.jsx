import React from "react";
import { Link } from "react-router-dom";
import { Button as Tombol } from "antd";
import { Row, Col } from "antd";
import "./button.css";

export default function Button() {
  return (
    <div>
      <div className="container-button">
        <Row type="flex" justify="space-around">
          <Col sm={10}>
            <Link to={"/Booking"}>
              <Tombol type="primary" block>
                BOOKING SEKARANG
              </Tombol>
            </Link>
          </Col>
          <Col sm={10}>
            <Link to={"/form"}>
              <Tombol type="primary" block>
                LOGIN / REGISTER
              </Tombol>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}
