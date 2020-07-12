import React,{useEffect , useState}  from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";
import useGame from './../../hooks/game/useGame';
import {getGame} from '../../services/gameService'
import { useHistory } from "react-router-dom";

export interface GameProps {}

const Game: React.SFC<GameProps> = () => {

  const game = useGame();
  const [location , setLocation] = useState('');
  const history = useHistory();
  const onLeaveGame = () =>
  {
    history.push('./room')

  }

  useEffect(()=>{
    const loadGame = async () =>
    {
      setLocation(await getGame(game.gameId));
    };

    loadGame();

  } , [])
  console.log('game is' , game)
  return (
    <Grid container>
      <Grid item md={4} xs={false} />
      <Grid item md={4} xs={12}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Game {game.gameId}
                <br />
                {location}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Button variant="contained" onClick={onLeaveGame} color="secondary">Leave Game</Button>
      </Grid>

      <Grid item md={4} xs={false} />
    </Grid>
  );
};

export default Game;
