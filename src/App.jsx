import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login'
import Error from './Error'
import Navbar from './components/navbar'
import Footer from './components/footer'
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/login" component={ Login }/>
            <Route component={ Error } />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
