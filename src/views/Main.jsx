import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Redirect, Route, Switch } from "react-router-dom";
import Timer from "../components/Timer"
import Countdown from "../components/Countdown"

export default () => {
  return (
    <React.Fragment>
      <Header />
      <section className="content">
        <Switch>
        <Route path="/timer" component={Timer}/>
        <Route path="/countdown" component={Countdown}/>
        <Redirect to="/timer" />
        </Switch>
      </section>
      <Footer />
    </React.Fragment>
  );
};
