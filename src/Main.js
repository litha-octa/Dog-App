import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import Login from "./Screen/Login";
import Home from "./Screen/Home";



class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={Login} />
            <Route path="/Home" component={Home} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;