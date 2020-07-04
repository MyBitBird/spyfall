import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./style";
import LoginForm from "./login";
const logo = require("../../asstes/images/bitbird_small_blue.png");

export interface LoginProps {}

const Login: React.SFC<LoginProps> = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item md={4} xs={false} />
      <Grid item md xs={12} className={classes.container}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <div className={classes.header}>
              <Typography variant="h4" component="h2">
                Spyfall
              </Typography>
            </div>
          </Grid>
          <Grid item md={4} xs={12} className={classes.logo}>
            <img alt="bitbird" src={logo} />
          </Grid>
          <Grid item md={8} xs={12}>
            <LoginForm />
          </Grid>
          <Grid item md={12} xs={12}>
            <div className={classes.copyRight}>
              <label>&copy; BitBird</label>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4} xs={false} />
    </Grid>
  );
};

export default Login;
