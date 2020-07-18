import React from "react";
import { CssBaseline,ThemeProvider } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import RoomProvider from "./providers/room";
import GameProvider from "./providers/game";
import LanguageProvider from "./providers/language";
import Loading from "./components/loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from './theme'

function App() {
  return (
    <div className="App">
      
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <Loading />
      <ToastContainer />
      <LanguageProvider>
        <RoomProvider>
          <GameProvider>
            <Switch>
              {routes.map((route, key) => {
                return <Route key={key} {...route} />;
              })}
            </Switch>
          </GameProvider>
        </RoomProvider>
      </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
