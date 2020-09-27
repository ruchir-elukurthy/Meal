import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Error from "./components/Error";
import Fmeal from "./components/F-meal";
import Lmeal from "./components/L-meal";
import Bmeal from "./components/B-meal";
import Cmeal from "./components/C-meal";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import CoinToss from "./components/CoinToss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Homepage" exact component={Homepage} />
          <Route path="/Homepage/F-meal" exact component={Fmeal} />
          <Route path="/Homepage/L-meal" exact component={Lmeal} />
          <Route path="/Homepage/B-meal" exact component={Bmeal} />
          <Route path="/Homepage/C-meal" exact component={Cmeal} />
          <Route path="/Homepage/Coin-Toss" exact component={CoinToss} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
