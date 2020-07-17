import React from "react";
import { CssBaseline } from "@material-ui/core";
import {Route,Switch} from 'react-router-dom'
import routes from "./routes";
import RoomProvider from './providers/room'
import GameProvider from './providers/game';
import Loading from "./components/loading";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Loading />
      <RoomProvider>
        <GameProvider>
        <Switch>
          {routes.map((route, key) => {
            return <Route key={key} {...route} />;
          })}
        </Switch>
        </GameProvider>
      </RoomProvider>
    </div>
  );
}

export default App;
