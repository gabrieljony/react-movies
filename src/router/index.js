import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "../App";
import Pagina404 from "../components/Pagina404";
import Detail from "../pages/Detail";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="*" component={Pagina404} />
    </Switch>
  );
};
