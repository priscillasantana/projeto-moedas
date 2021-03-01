import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from './store/index'
import Cadastro from './pages/cadastro'
import Moedas from "./pages/moedas";
import Home from "./pages/home";
import Login from "./pages/login";




function Routes() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path="/" exact component={Cadastro} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/moedas" exact component={Moedas} />
        </Switch>
      </Provider>
    </BrowserRouter>
  )
}

export default Routes;