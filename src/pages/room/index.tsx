import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import useRoom from "./../../hooks/room/useRoom";
import {connect , addEvent , disconnect} from "../../socket";
import { Player } from "./../../types/player";
import Config from '../../config'
import { Link } from "react-router-dom";

export interface PageProps {}

const Page: React.SFC<PageProps> = () => {
  const room = useRoom();
  const [players, setPlayers] = useState([{} as Player]);

  const handlePlayerJoined = (data: any) => {
    setPlayers(players.concat(data));
  };

  useEffect(() => {
    if(connect(room?._id))
      addEvent(Config.EVENTS.PLAYER_JOINED , handlePlayerJoined)

      return () => {
        console.log('unmount');
        disconnect();
      }
  }, []);

  return (
    <Grid container>
      <Grid item md={4} xs={false} />
      <Grid item md={4} xs={12}>
        <Paper>
          <h2>Players</h2>
          <label>RoomId: {room?._id}</label> <br />
          <label>Code: {room?.code}</label>
          <br />
          <label>PlayerId: {room?.playerId}</label>
          <br />
          {players.map((player: any, key: any) => {
            return (
              <>
                <h2 key={key}>{player.name}</h2>
                <br />
              </>
            );
          })}
        </Paper>
        <Link to='./' >Back</Link>
      </Grid>
      <Grid item md={4} xs={false} />
    </Grid>
  );
};

export default Page;
