import React, { Component } from "react";
import {
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Card,
  Row,
  Col,
  InputNumber
} from "antd";
import "antd/dist/antd.css";
import "./booking.css";

const areaData = [
  "GedungA",
  "GedungB",
  "GedungC",
  "GedungD",
  "Lapangan",
  "RPS"
];
const ruangData = {
  GedungA: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9"],
  GedungB: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9"],
  GedungC: ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9"],
  GedungD: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9"],
  Lapangan: [" "],
  RPS: [" "]
};

export default class BookingForm extends Component {
  constructor() {
    super();
    this.state = {
      areaRooms: ruangData[areaData[0]], //refers to a room array in ruangData's fields (in this case areaData[0]'s 1 = GedungA's = the first [1, 2, 3, 4, 5, 6, 7, 8, 9])
      room: ruangData[areaData[0]][0] //refers to a specific room in ruangData's field
    };
  }

  handleRuangChange = value => {
    this.setState({
      areaRooms: ruangData[value],
      room: ruangData[value][0]
    });
  };

  onRoomChange = value => {
    this.setState({
      room: value
    });
  };

  render() {
    const eventFormItemLayout = {
      labelCol: { span: 4, offset: 0 },
      wrapperCol: { span: 16, offset: 2 }
    };
    const jumlahRuangFormItemLayout = {
      labelCol: { span: 4, offset: 0 },
      wrapperCol: { offset: 6 }
    };
    const ruangFormItemLayout = {
      labelCol: { span: 4, offset: 0 },
      wrapperCol: { offset: 6 }
    };
    const tanggalFormItemLayout = {
      labelCol: { span: 4, offset: 0 },
      wrapperCol: { span: 16, offset: 2 }
    };
    const { areaRooms } = this.state;

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
              style={{ width: 1000, padding: 0 }}
              id="booking"
              bordered={false}
            >
              <Card.Grid style={{ padding: 0, height: "100%", width: "40%" }}>
                <Card
                  style={{ padding: 10 }}
                  cover={
                    <img
                      alt="Failed to load"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQym9v4l9S1Ma9vhmj5QCq3-88YuprHRx7E2gN0ByBOD_zZqLR3"
                    />
                  }
                >
                  <Button
                    className="picture-desc-button"
                    style={{ margin: 30 }}
                    type="primary"
                  >
                    Deskripsi
                  </Button>
                </Card>
              </Card.Grid>

              <Card.Grid style={{ height: "100%", width: "60%" }}>
                <Form layout="horizontal">
                  <Form.Item label="Event" {...eventFormItemLayout} required>
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Jumlah Ruang"
                    {...jumlahRuangFormItemLayout}
                  >
                    <InputNumber defaultValue={1} min={1} />
                  </Form.Item>

                  <Form.Item label="Ruang" {...ruangFormItemLayout} required>
                    <Input.Group compact={true}>
                      <Select
                        defaultValue="Gedung A"
                        onChange={this.handleRuangChange}
                      >
                        {areaData.map(area => (
                          <Select.Option key={area}>
                            {area.replace("ung", "ung ")}
                          </Select.Option>
                        ))}
                      </Select>

                      <Select
                        onChange={this.onRoomChange}
                        value={this.state.room}
                      >
                        {areaRooms.map(ruang => (
                          <Select.Option key={ruang}>{ruang}</Select.Option>
                        ))}
                      </Select>
                    </Input.Group>
                  </Form.Item>

                  <Form.Item
                    label="Tanggal"
                    {...tanggalFormItemLayout}
                    required
                  >
                    <DatePicker.RangePicker
                      format="DD-MM-YYYY h:mm a"
                      placeHolder={["Mulai", "Selesai"]}
                      showTime={{ format: "h:mm a" }}
                    />
                  </Form.Item>

                  <Form.Item style={{ margin: "auto" }}>
                    <Button type="primary">Submit</Button>
                  </Form.Item>
                </Form>
              </Card.Grid>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
