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
import localize from "../../local/localize";
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
      if (game.gameId) setLocation(await getGame(game.gameId));
    };

    loadGame();
  }, []);
  return (
    <Grid container className={classes.container}>
      <Grid item md={3} xs={false} />
      <Grid item md={6} xs={12}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.cardMedia}
              image={
                location
                  ? require(`../../asstes/locations/${location?.image}.jpg`)
                  : null
              }
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {location?.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Button
          className={classes.button}
          variant="contained"
          onClick={onLeaveGame}
          color="secondary"
        >
          {localize("leaveGame.btn")}
        </Button>
        <Grid container>
          <Grid item md={12} xs={12} className={classes.locationHeader}>
            <Typography gutterBottom variant="h5" component="h2">
              {localize("locations.label")}
            </Typography>
          </Grid>
          {allLocations.map((location, key) => {
            return (
              <React.Fragment key={key}>
                <Grid item md={2} xs={false} />
                <Grid item md={4} xs={6} className={classes.locations}>
                  <Typography variant="h6" gutterBottom>
                    {`${key + 1}. ${location.title}`}
                  </Typography>
                </Grid>
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>

      <Grid item md={3} xs={false} />
    </Grid>
  );
};

export default Game;
