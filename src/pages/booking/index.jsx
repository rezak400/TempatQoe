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
      numberOfRoom: 1,
      roomValue1: [],
      roomValue2: [],
      roomValue3: [],
      roomValue4: [],
      roomValue5: []
    };
  }

  handleNumberOfRoomChange = value => {
    this.setState({
      numberOfRoom: value
    });
  };

  handleRoomChange1 = async value => {
    await this.setState({
      roomValue1: value
    });
    console.log(
      `Function 1 : Value of selector 1 has changed to ${this.state.roomValue1}`
    );
  };
  handleRoomChange2 = async value => {
    await this.setState({
      roomValue2: value
    });
    console.log(
      `Function 2 : Value of selector 2 has changed to ${this.state.roomValue2}`
    );
  };
  handleRoomChange3 = async value => {
    await this.setState({
      roomValue3: value
    });
    console.log(
      `Function 3 : Value of selector 3 has changed to ${this.state.roomValue3}`
    );
  };
  handleRoomChange4 = async value => {
    await this.setState({
      roomValue5: value
    });
    console.log(
      `Function 4 : Value of selector 4 has changed to ${this.state.roomValue4}`
    );
  };
  handleRoomChange5 = async value => {
    await this.setState({
      roomValue5: value
    });
    console.log(
      `Function 5 : Value of selector 5 has changed to ${this.state.roomValue5}`
    );
  };

  render() {
    const roomForm = i => {
      const rooms = [
        this.state.roomValue1,
        this.state.roomValue2,
        this.state.roomValue3,
        this.state.roomValue4,
        this.state.roomValue5
      ];

      const handleRoomChangeFuncts = [
        this.handleRoomChange1,
        this.handleRoomChange2,
        this.handleRoomChange3,
        this.handleRoomChange4,
        this.handleRoomChange5
      ];

      let I = 0;

      let roomCascader = (
        <Cascader
          options={Option}
          onChange={handleRoomChangeFuncts[I]}
          value={rooms[I]}
        />
      );

      const formRepeat = [];

      for (i; i > 0; i--) {
        formRepeat.push(roomCascader);
        I++;
        roomCascader = (
          <Cascader
            options={Option}
            onChange={handleRoomChangeFuncts[I]}
            value={rooms[I]}
          />
        );
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
