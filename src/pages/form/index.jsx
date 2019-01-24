import React, { Component } from "react";
import "antd/dist/antd.css";
import "./form.css";
import  NormalLoginForm  from "./login";
import  RegistrationForm from "./register";
import smk from "./tempatqu.png";
import {
    Form, 
    Input, 
    Tooltip, 
    Icon, 
    Cascader, 
    Select, 
    Button, 
    InputNumber,
    Card, 
  } from 'antd';

  

const tabListNoTitle = [{
  key: 'login',
  tab: 'Login',
}, {
  key: 'register',
  tab: 'Register',
}];

const contentListNoTitle = {
  login: <NormalLoginForm />,
  register: <RegistrationForm />,
 
};

export default class TabsCard extends Component {
  state = {
    noTitleKey: 'register',
  }

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  }

  render() {
    return (
      <div className="form">

        <div className="img-form">
          <img src={smk} alt="ini gambar" />
        </div>
       
        <Card
          className="card-section"
         
          style={{ width: '100%', textAlign: 'center' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </div>
    );
  }
}

