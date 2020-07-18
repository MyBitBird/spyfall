import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import Dialog from "../../components/dialog";
import useStyles from "./style";
import { useHistory } from "react-router-dom";
import * as roomService from "../../services/roomService";
import localize from '../../local/localize'

const LoginForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [error, setError] = useState("");

  const closeDialog = () => setIsOpen(false);
  const openDialog = () => setIsOpen(true);

  const joinHandler = async () => {
    const token = await roomService.joinRoom(name, joinCode);
    saveToken(token);
    enterRoom();
  };

  const createRoom = async () => {
    const res = validate();
    setError(res.message);
    if (!res.isValid) return;
    const token = await roomService.createRoom(name);
    saveToken(token);
    enterRoom();
  };

  const enterRoom = () => {
    history.push("/room");
  };

  const joinRoom = () => {
    const res = validate();
    setError(res.message);
    if (res.isValid) openDialog();
  };

  const validationMessage = localize("roomValidationMessage")
  const validate = () => {
    if (name.length < 3)
      return { isValid: false, message: validationMessage };
    return { isValid: true, message: "" };
  };

  const saveToken = (token: any) => {
    localStorage.setItem("token", token);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid md={12} xs={12} item>
          <TextField
            variant="outlined"
            id="name"
            label={localize('enterName.text')}
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
            {localize('create.label')}
          </Button>
        </Grid>
        <Grid md={6} xs={12} item>
          <Button
            color="secondary"
            variant="contained"
            fullWidth
            onClick={joinRoom}
          >
            {localize('join.label')}
          </Button>
        </Grid>
        <Grid md={12} xs={12} item>
          <label className={classes.error}>{error}</label>
        </Grid>
      </Grid>
      <Dialog
        title={localize('jonRoom.label')}
        isOpen={isOpen}
        close={{ title: localize('join.close'), action: closeDialog }}
        approve={{ title: localize("join.btn"), action: joinHandler }}
      >
        <TextField
          autoFocus
          fullWidth
          label={localize('join.text')}
          variant="standard"
          onChange={(e) => setJoinCode(e.target.value)}
        />
      </Dialog>
    </>
  );
};

export default LoginForm;
