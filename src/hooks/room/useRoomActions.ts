import { useContext } from 'react';
import { RoomProviderContextDispatcher } from './../../provider/room';

const useRoomAction  = () => useContext(RoomProviderContextDispatcher)

export default useRoomAction;