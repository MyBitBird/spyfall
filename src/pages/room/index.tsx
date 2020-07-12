import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography, Chip, Button } from "@material-ui/core";
import useRoom from "./../../hooks/room/useRoom";
import { connect, addEvent, disconnect } from "../../socket";
import { Player } from "./../../types/player";
import Config from "../../config";
import FaceIcon from "@material-ui/icons/Face";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./style";
import { useHistory } from "react-router-dom";
import { getRoom,leaveRoom } from "../../services/roomService";
import useRoomAction from "./../../hooks/room/useRoomActions";

export interface PageProps {}

const Page: React.SFC<PageProps> = () => {
  const classes = useStyles();
  const history = useHistory();
  const setroom = useRoomAction();

  const room = useRoom();
  const [players, setPlayers] = useState<Player[]>([]);

  const handlePlayerJoined = (data: any) => {
    console.log("socket recive", data);
    setPlayers(players.concat(data));
  };

  const handleGameStarted = () => {
    history.push("/game");
  };

  const handleLeaveRoom = async () =>{
    await leaveRoom();
    history.push('/')
  }

  useEffect(() => {
    const loadRoom = async () => {
      const room = await getRoom();
      setroom(room);
      if (connect(room?._id)) {
        addEvent(Config.EVENTS.PLAYERS_CHANGED, handlePlayerJoined);
        addEvent(Config.EVENTS.GAME_STARTED, handleGameStarted);
      }
    };
    loadRoom();

    return () => {
      disconnect();
    };
  }, []);

  return (
    <Grid container>
      <Grid item md={4} xs={false} />
      <Grid item md={4} xs={12}>
        <Paper className={classes.container}>
          <Typography variant="h5" component="h5">
            Join Code: {room?.code}
          </Typography>
          <hr />
          <Grid container>
            {players.map((player: any, key: any) => {
              return (
                <Grid item md={12} xs={12}  key={key}>
                  <Chip
                    className={classes.player}
                    icon={<FaceIcon />}
                    label={player.name}
                    clickable
                    color="secondary"
                    onDelete={() => {}}
                    deleteIcon={<DeleteIcon />}
                  />
                </Grid>
              );
            })}
            <Grid item md={6} xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleGameStarted}
              >
                Start Game
              </Button>
            </Grid>
            <Grid item md={6} xs={12}>
              <Button variant="contained" color="primary" onClick={handleLeaveRoom}>
                Leave Room{" "}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item md={4} xs={false} />
    </Grid>
  );
};

export default Page;
