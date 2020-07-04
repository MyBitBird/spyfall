import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import Dialog from "../../components/dialog";
import useStyles from "./style";

const Login = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [joinCode, setJoinCode] = useState("");

  const [error, setError] = useState("");

  const closeDialog = () => setIsOpen(false);
  const openDialog = () => setIsOpen(true);

  const joinHandler = () => {};

  const createRoom = () => {
    const res = validate();
    setError(res.message);
    if (res.isValid) console.log("create room");
  };

  const joinRoom = () => {
    const res = validate();
    setError(res.message);
    if (res.isValid) openDialog();
  };

  const validate = () => {
    if (name.length < 3)
      return { isValid: false, message: "Name should be at least 3 character" };
    return { isValid: true, message: "" };
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid md={12} xs={12} item>
          <TextField
            variant="outlined"
            id="name"
            label="Enter Name:"
            size="small"
            onChange={(e) => setName(e.target.value)}
            fullWidth
            autoFocus
          />
        </Grid>
        <Grid md={6} xs={12} item>
          <Button
            color="secondary"
            variant="contained"
            fullWidth
            onClick={createRoom}
          >
            Create
          </Button>
        </Grid>
        <Grid md={6} xs={12} item>
          <Button
            color="secondary"
            variant="contained"
            fullWidth
            onClick={joinRoom}
          >
            Join
          </Button>
        </Grid>
        <Grid md={12} xs={12} item>
          <label className={classes.error}>{error}</label>
        </Grid>
      </Grid>
      <Dialog
        title="Join Room"
        isOpen={isOpen}
        close={{ title: "close", action: closeDialog }}
        approve={{ title: "join", action: joinHandler }}
      >
        <TextField
          autoFocus
          label="Enter Room Code"
          variant="standard"
          onChange={(e) => setJoinCode(e.target.value)}
        />
      </Dialog>
    </>
  );
};

export default Login;
