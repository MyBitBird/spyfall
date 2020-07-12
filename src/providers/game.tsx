import  React,{Dispatch} from 'react';
import { createContext, useState } from "react";
import { Game } from './../types/game';

export const GameProviderContext = createContext({} as Game);
export const GameProviderContextDispatcher = createContext((() => {}) as Dispatch<Game>);

const GameProvider = ({ children }: any) => {
  const [game, setGame] = useState({} as Game);
  return (
    <GameProviderContext.Provider value={game}>
      <GameProviderContextDispatcher.Provider value={setGame}>
        {children}
      </GameProviderContextDispatcher.Provider>
    </GameProviderContext.Provider>
  );
};

export default GameProvider;