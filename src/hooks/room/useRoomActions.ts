import { useContext } from 'react';
import { RoomProviderContextDispatcher } from '../../providers/room';

const useRoomAction  = () => useContext(RoomProviderContextDispatcher)

export default useRoomAction;