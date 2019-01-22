import React, { Component } from "react";
import {
  Form,
  Input,
  //Select,
  DatePicker,
  Button,
  Card,
  Row,
  Col,
  InputNumber,
  Cascader
} from "antd";
import Option from "./rooms.jsx";
import "antd/dist/antd.css";
import "./booking.css";

export default class BookingForm extends Component {
  constructor() {
    super();
    this.state = {
      numberOfRoom: 1
    };
  }

  handleNumberOfRoomChange = value => {
    this.setState({
      numberOfRoom: value
    });
  };

  handleRoomChange = (value, keys) => {
    console.log(`Value of selector ${keys} has changed to ${value}`);
  };

  render() {
    const roomForm = i => {
      let I = 1;

      const roomCascader = (
        <Cascader keys={I} options={Option} onChange={this.handleRoomChange} />
      );

      const formRepeat = [];

      for (i; i > 0; i--) {
        formRepeat.push(roomCascader);
        I++;
      }

      return formRepeat;
    };

    const eventFormItemLayout = {
      labelCol: { span: 5, offset: 0 },
      wrapperCol: { span: 15, offset: 0 }
    };
    const jumlahRuangFormItemLayout = {
      labelCol: { span: 5, offset: 0 },
      wrapperCol: { span: 4, offset: 0 }
    };
    const ruangFormItemLayout = {
      labelCol: { span: 5, offset: 0 },
      wrapperCol: { span: 15, offset: 0 }
    };
    const tanggalFormItemLayout = {
      labelCol: { span: 5, offset: 0 },
      wrapperCol: { span: 15, offset: 0 }
    };
    const submitButtonFormItemLayout = {
      labelCol: { span: 5, offset: 0 },
      wrapperCol: { span: 16, offset: 0 }
    };

    return (
      <div>
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ padding: 108 }}
        >
          <Col span={100}>
            <Card
              style={{ width: 600, padding: 0 }}
              id="booking"
              bordered={false}
            >
              <Form layout="horizontal">
                <Form.Item label="Event" {...eventFormItemLayout} required>
                  <Input />
                </Form.Item>

                <Form.Item label="Jumlah Ruang" {...jumlahRuangFormItemLayout}>
                  <InputNumber
                    defaultValue={1}
                    min={1}
                    max={5}
                    onChange={this.handleNumberOfRoomChange}
                  />
                </Form.Item>

                <Form.Item label="Ruang" {...ruangFormItemLayout} required>
                  {roomForm(this.state.numberOfRoom)}
                </Form.Item>

                <Form.Item label="Tanggal" {...tanggalFormItemLayout} required>
                  <DatePicker.RangePicker
                    format="DD-MM-YYYY h:mm a"
                    placeHolder={["Mulai", "Selesai"]}
                    showTime={{ format: "h:mm a" }}
                  />
                </Form.Item>

                <Form.Item {...submitButtonFormItemLayout}>
                  <Button type="primary">Submit</Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
