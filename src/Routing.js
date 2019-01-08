import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Nintendoswitch from "./components/Nintendoswitch";
import Ps4 from "./components/Ps4"
import Xboxone from "./components/Xboxone";

const Routing = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/nintendoswitch" component={Nintendoswitch} />
        <Route exact path="/ps4" component={Ps4} />
        <Route exact path="/xboxone" component={Xboxone} />
        </Switch>
  </Router>
);

export default Routing;