import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Booking from "./pages/booking";
import Error from "./Error";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Register from "./pages/register";
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
<<<<<<< HEAD
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/login" component={ Login } />
              <Route path="/register" component={ Register } />
              <Route component={ Error } />
            </Switch>
=======
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/booking" component={Booking} />
            <Route path="/register" component={Register} />
            <Route component={Error} />
          </Switch>
>>>>>>> 09b72c70cbd0a16c2e2935e48ce33629f9779d7a
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
