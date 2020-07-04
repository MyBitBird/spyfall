import  React,{Dispatch} from 'react';
import { createContext, useState } from "react";
import { Room } from './../types/room';

export const RoomProviderContext = createContext({} as Room);
export const RoomProviderContextDispatcher = createContext((() => {}) as Dispatch<Room>);

const RoomProvider = ({ children }: any) => {
  const [room, setRoom] = useState({} as Room);
  return (
    <RoomProviderContext.Provider value={room}>
      <RoomProviderContextDispatcher.Provider value={setRoom}>
        {children}
      </RoomProviderContextDispatcher.Provider>
    </RoomProviderContext.Provider>
  );
};

export default RoomProvider;