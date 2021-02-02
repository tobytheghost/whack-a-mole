import React from "react";
import Game from "./views/Game/Game";
import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./context/Reducer";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <StateProvider initialState={initialState} reducer={reducer}>
        <Game />
      </StateProvider>
    </div>
  );
};

export default App;
