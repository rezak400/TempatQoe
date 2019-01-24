import React, { Component } from "react";
import "antd/dist/antd.css";
import "./register.css";
import {
    Form, 
    Input, 
    Tooltip, 
    Icon, 
    Cascader, 
    Select, 
    Button, 
    InputNumber,
    Card
     //AutoComplete,
  } from 'antd';
  
  const { Option } = Select;
//   const AutoCompleteOption = AutoComplete.Option;
  
  
  class RegistrationForm extends Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  
    handleConfirmBlur = (e) => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
  
    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    }
  
    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    }
  
   
  
    render() {
      const { getFieldDecorator } = this.props.form;
    //   const { autoCompleteResult } = this.state;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '62',
      })(
         
        <Select style={{ width: 70 }}>
          <Option value="62">+62</Option>
         
        </Select>
      );
  
     
      return (
        
        <Form onSubmit={this.handleSubmit}  className="regis-form">
          <Form.Item
            {...formItemLayout}
            label="Nomor Induk"
          >
            {getFieldDecorator('nomor_induk', {
              rules: [{
                type: 'number', message: 'Input yang bener, itu bukan angka!',
              }, {
                required: true, message: 'Please lah masukkin nomor induk kau itu',
              }],
            })(
              <InputNumber className="inum" />
            )}
          </Form.Item>
          <Form.Item
          {...formItemLayout}
            label="Nama"
          >
            {getFieldDecorator('nama', {
              rules: [{ required: true, message: 'Masukkin nama dong pls', whitespace: true }],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Password"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input.Password />
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Confirm Password"
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input.Password onBlur={this.handleConfirmBlur} />
            )}
          </Form.Item>
          {/* <Form.Item
            {...formItemLayout}
            label={(
              <span>
                Nickname&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle" />
                </Tooltip>
              </span>
            )}
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
            })(
              <Input />
            )}
          </Form.Item> */}
          <Form.Item
            {...formItemLayout}
            label="Phone Number"
          >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            )}
          </Form.Item>
                   
           <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Register</Button>
          </Form.Item>
        </Form>
        
          
         
      );
    }
  }
  
  export default Form.create()(RegistrationForm);
  