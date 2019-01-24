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
          
          justify="center"
          align="middle"
          style={{ padding: 100 }}
        ></Row>
           
         <Form onSubmit={this.handleSubmit} className="login-form">
            
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
              <Input.Password 
                prefix={<Icon type="lock" style={{ color: "blue" }} />}
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
           
          </Form.Item>
        </Form>
      
      
      </div>  
    );
  }
}

export default Form.create()(NormalLoginForm);
