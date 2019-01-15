import React, { Component } from "react";
import {Link} from "react-router-dom";
import "antd/dist/antd.css";
import "./login.css";
import { Form, Icon, Input, Button, Row, Col } from "antd";

 class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="form">
          <Row
          type="flex"
          justify="center"
          
          style={{ padding: 100 }}
        >
         <Form onSubmit={this.handleSubmit} className="login-form">
            <h2>Login</h2>
          <Form.Item>
            {getFieldDecorator("userName", {
              rules: [{ required: true, message: "Please input your username!" }]
            })(
              <Input
                prefix={<Icon type="user" style={{ color: "blue" }} />}
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Please input your Password!" }]
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: "blue" }} />}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or
            <Link to={"/Register"}> register now!</Link>
          </Form.Item>
        </Form>
      </Row>
      </div>  
    );
  }
}

export default Form.create()(NormalLoginForm);
