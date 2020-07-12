import { useContext } from 'react';
import { GameProviderContextDispatcher } from '../../providers/game';

const useGameAction  = () => useContext(GameProviderContextDispatcher)

export default useGameAction;