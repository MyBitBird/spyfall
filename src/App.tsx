import React from "react";
import { CssBaseline } from "@material-ui/core";
import {Route,Switch} from 'react-router-dom'
import routes from "./routes";
import RoomProvider from './providers/room'

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <RoomProvider>
        <Switch>
          {routes.map((route, key) => {
            return <Route key={key} {...route} />;
          })}
        </Switch>
      </RoomProvider>
    </div>
  );
}

export default App;
