import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import Room from './pages/room';
import Home from "./pages/home";
import Booking from "./pages/booking";
import Error from "./Error";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Register from "./pages/register";
import Form from "./pages/form";
// import WOW from 'wowjs';



class App extends Component {

  // componentDidMount() {
  //   new WOW.WOW().init();
  // }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Form} />
            <Route path="/booking" component={Booking} />
            <Route path="/register" component={Register} />
            <Route path="/room" component={Room} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
