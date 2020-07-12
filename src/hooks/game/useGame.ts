import { useContext } from "react";

import { GameProviderContext } from "../../providers/game";

const useGame = () => useContext(GameProviderContext);

export default useGame;
