import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import Login from "./Screen/Login";
import Galeri from "./Screen/Galeri";



class Main extends Component {
  componentDidUpdate(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HashRouter onUpdate={() => window.scrollTo(0,0)}>
        <div>
          <div className="content">
            <Route exact path="/" component={Login} />
            <Route path="/Galeri" component={Galeri} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;