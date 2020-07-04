import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Switch>
        {routes.map((route, key) => {
          return <Route key={key} {...route} />;
        })}
      </Switch>
    </div>
  );
}

export default App;
