import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";

import Home from "./Home";
import Asthma from "./Asthma";
import ChildhoodLead from "./ChildhoodLead";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path={`/asthma`} exact={true} component={Asthma} />
        <Route path={`/lead`} exact={true} component={ChildhoodLead} />
        <Route
          path={`/:lead/file`}
          render={(props) => <ChildhoodLead {...props} type="file" />}
          exact={true}
        />
        <Route render={() => <ErrorPage />} />
      </Switch>
    </BrowserRouter>
  );
}

export { App };

/* eslint
"no-unused-vars": [
  "warn",
  {
    "argsIgnorePattern": "^_.+|^ignore.+",
    "varsIgnorePattern": "^_.+|^ignore.+",
    "args": "after-used"
  }
]
 */
