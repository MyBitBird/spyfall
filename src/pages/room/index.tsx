import React, { useEffect, useState, useRef } from "react";
import {
  Grid,
  Paper,
  Typography,
  Chip,
  Button,
  IconButton,
} from "@material-ui/core";
import useRoom from "./../../hooks/room/useRoom";
import { connect, addEvent, disconnect } from "../../socket";
import { Player } from "./../../types/player";
import Config from "../../config";
import CloseIcon from "@material-ui/icons/HighlightOff";
import useStyles from "./style";
import { useHistory } from "react-router-dom";
import { getRoom, leaveRoom } from "../../services/roomService";
import useRoomAction from "./../../hooks/room/useRoomActions";
import useGameAction from "./../../hooks/game/useGameAction";
import { startGame } from "../../services/gameService";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { toast } from "react-toastify";

export interface PageProps {}

const Page: React.SFC<PageProps> = () => {
  const classes = useStyles();
  const history = useHistory();
  const setroom = useRoomAction();
  const setGame = useGameAction();

  const room = useRoom();
  const [players, setPlayers] = useState<Player[]>([]);
  const codeRef = useRef({} as any);
  const buttonRef = useRef({} as any);

  const onPlayersChanged = async (data: any) => {
    const room = await getRoom();
    if (!room) return history.push("/");
    setPlayers(data);
  };

  const onGameStarted = (game: any) => {
    setGame(game);
    history.push("/game");
  };

  const onStartGame = async () => {
    await startGame();
  };

  const onLeaveBtnClick = async () => {
    leaveRoom(null);
    history.push("/");
  };

  const onRemoveBtnClick = async (index: number) => {
    await leaveRoom(index);
  };

  const copyToClipboard = () => {
    codeRef.current.select();
    document.execCommand("copy");
    buttonRef.current.focus();
    toast.info("Copied!",{hideProgressBar:true,autoClose:1000})
  };

  useEffect(() => {
    const loadRoom = async () => {
      const room = await getRoom();
      if (!room) return;
      setroom(room);
      if (connect(room?._id)) {
        addEvent(Config.EVENTS.PLAYERS_CHANGED, onPlayersChanged);
        addEvent(Config.EVENTS.GAME_STARTED, onGameStarted);
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
      <Grid item md={4} xs={12} className={classes.container}>
        <Typography variant="h5" component="h5">
          Join Code:{" "}
          <textarea
            className={classes.code}
            readOnly
            ref={codeRef}
            value={room?.code}
          >
            {room?.code}
          </textarea>
          <IconButton ref={buttonRef} onClick={copyToClipboard}>
            <FileCopyIcon />
          </IconButton>
        </Typography>
        <hr />
        <Grid container spacing={1}>
          {players.map((player: any, index: number) => {
            return (
              <Grid item md={12} xs={12} key={index}>
                <Paper className={classes.player}>
                  <div className={classes.playerTitle}>
                    <label> {`${index + 1}.${player.name}`}</label>
                  </div>
                  <div className={classes.deleteButton}>
                    <CloseIcon
                      color="secondary"
                      onClick={() => onRemoveBtnClick(index)}
                    />
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Grid container className={classes.buttons} spacing={2}>
          <Grid item md={6} xs={12}>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              onClick={onStartGame}
            >
              Start Game
            </Button>
          </Grid>
          <Grid item md={6} xs={12}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={onLeaveBtnClick}
            >
              Leave Room{" "}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4} xs={false} />
    </Grid>
  );
};

export default Page;
