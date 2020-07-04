import { useContext } from "react";

import { RoomProviderContext } from "../../providers/room";

const useRoom = () => useContext(RoomProviderContext);

export default useRoom;
