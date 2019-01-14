import React, { Component } from "react";
import { Form, Input, Select, DatePicker, Button, Card, Row, Col } from "antd";
import "antd/dist/antd.css";

const areaData = [
  "GedungA",
  "GedungB",
  "GedungC",
  "GedungD",
  "Lapangan",
  "RPS"
];
const ruangData = {
  GedungA: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  GedungB: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  GedungC: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  GedungD: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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
    const formItemLayout = {
      labelCol: { span: 4, offset: 0 },
      wrapperCol: { span: 18, offset: 2 }
    };
    const { areaRooms } = this.state;

    return (
      <div>
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ padding: 130 }}
        >
          <Col span={100}>
            <Card style={{ width: 900, padding: 0 }}>
              <Card.Grid style={{padding: 0, height: "100%", width: "40%" }}>
                <Card style={{padding: 10}} cover={<img alt="Failed to load" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQym9v4l9S1Ma9vhmj5QCq3-88YuprHRx7E2gN0ByBOD_zZqLR3" />}>
                  <Button style={{margin: 15}} type="primary">
                    Deskripsi
                  </Button>
                </Card>
              </Card.Grid>
              <Card.Grid style={{ height: "100%", width: "60%" }}>
                  <Form layout="horizontal">
                    <Form.Item label="Event" {...formItemLayout} required>
                      <Input />
                    </Form.Item>

                    <Form.Item label="Area" {...formItemLayout} required>
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
                    </Form.Item>

                    <Form.Item label="Ruang" {...formItemLayout} required>
                      <Select
                        onChange={this.onRoomChange}
                        value={this.state.room}
                      >
                        {areaRooms.map(ruang => (
                          <Select.Option key={ruang}>{ruang}</Select.Option>
                        ))}
                      </Select>
                    </Form.Item>

                    <Form.Item label="Tanggal" {...formItemLayout} required>
                      <DatePicker.RangePicker
                        format="DD-MM-YYYY HH:mm"
                        placeHolder={["Mulai", "Selesai"]}
                        showTime={{ format: "HH:mm" }}
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" htmType="submit">
                        Submit
                      </Button>
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