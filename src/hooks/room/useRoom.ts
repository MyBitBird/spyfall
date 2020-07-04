import { useContext } from "react";

import { RoomProviderContext } from "../../provider/room";

const useRoom = () => useContext(RoomProviderContext);

export default useRoom;
