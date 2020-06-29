import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import useStyles from "./style";
import Dialog from "../../components/dialog";

export interface LoginProps {}

const Login: React.SFC<LoginProps> = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => setIsOpen(false);
  const openDialog = () => setIsOpen(true);
  const joinHandler = () => {};

  return (
    <Grid container>
      <Grid item md={4} xs={false} />
      <Grid md xs={12} className={classes.container}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <div className={classes.header}>
              <Typography variant="h4" component="h2">
                Spyfall
              </Typography>
            </div>
          </Grid>
          <Grid item md={4} xs={12} className={classes.logo}>
            <img src={require("../../asstes/images/bitbird_small_blue.png")} />
          </Grid>
          <Grid item md={8} xs={12}>
            <Grid container spacing={2}>
              <Grid md={12} xs={12} item>
                <TextField
                  variant="outlined"
                  id="name"
                  label="Enter Name:"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid md={6} xs={12} item>
                <Button color="secondary" variant="contained" fullWidth>
                  Create
                </Button>
              </Grid>
              <Grid md={6} xs={12} item>
                <Button
                  color="secondary"
                  variant="contained"
                  fullWidth
                  onClick={openDialog}
                >
                  Join
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12} xs={12}>
            <div className={classes.copyRight}>
              <label>&copy; BitBird</label>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4} xs={false} />
      <Dialog
        title="Join Room"
        isOpen={isOpen}
        close={{ title: "close", action: closeDialog }}
        approve={{ title: "join", action: joinHandler }}
      >
        <TextField autoFocus label="Enter Room Code" variant="standard" />
      </Dialog>
    </Grid>
  );
};

export default Login;
