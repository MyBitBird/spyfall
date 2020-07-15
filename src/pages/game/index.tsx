import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@material-ui/core";
import useGame from "./../../hooks/game/useGame";
import { getGame, getLocations } from "../../services/gameService";
import { useHistory } from "react-router-dom";
import { Location } from "../../types/location";
import useStyles from "./style";

export interface GameProps {}

const Game: React.SFC<GameProps> = () => {
  const classes = useStyles();
  const game = useGame();
  const [location, setLocation] = useState<Location>();
  const [allLocations, setAllLocation] = useState<Location[]>([]);
  const history = useHistory();
  const onLeaveGame = () => {
    history.push("./room");
  };

  useEffect(() => {
    const loadGame = async () => {
      setAllLocation(await getLocations());
      setLocation(await getGame(game.gameId));
    };

    loadGame();
  }, []);
  console.log("game is", game);
  return (
    <Grid container className={classes.container}>
      <Grid item md={4} xs={false} />
      <Grid item md={4} xs={12}>
        <Card>
          <CardActionArea>
            <CardMedia
              style={{ width: "100%", height: "250px" }}
              image={
                location
                  ? require(`../../asstes/locations/${location?.image}.jpg`)
                  : null
              }
              title="School"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {location?.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Grid container className={classes.locations}>
          <Grid md={12} xs={12} spacing={2}>
            <Typography gutterBottom variant="h5" component="h2">
              Locations:
            </Typography>
          </Grid>
          {allLocations.map((location, key) => {
            return (
              <Grid key={key} item md={6} xs={6}>
                {location.title}{" "}
              </Grid>
            );
          })}
        </Grid>
        <Button
          className={classes.button}
          variant="contained"
          onClick={onLeaveGame}
          color="secondary"
        >
          Leave Game
        </Button>
      </Grid>

      <Grid item md={4} xs={false} />
    </Grid>
  );
};

export default Game;
