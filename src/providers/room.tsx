import  React from 'react';
import { createContext, useState } from "react";

export const RoomProviderContext = createContext({});
export const RoomProviderContextDispatcher = createContext({});

const RoomProvider = ({ childern }: any) => {
  const [room, setRoom] = useState({});

  return (
    <RoomProviderContext.Provider value={room}>
      <RoomProviderContextDispatcher.Provider value={setRoom}>
        {childern}
      </RoomProviderContextDispatcher.Provider>
    </RoomProviderContext.Provider>
  );
};

export default RoomProvider;