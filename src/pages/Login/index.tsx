import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import useStyles from "./style";
import LoginForm from "./login";
import { languageOptions } from "../../local";
import useLanguageAction from "./../../hooks/language/useLanguageAction";
const logo = require("../../asstes/images/bitbird_small_blue.png");

export interface LoginProps {}

const Login: React.SFC<LoginProps> = () => {
  const classes = useStyles();
  const changeLanguage = useLanguageAction();

  return (
    <Grid container>
      <Grid item md={4} xs={false} />
      <Grid item md xs={12} className={classes.container}>
        <Grid container spacing={2}>
          <Grid container className={classes.header}>
          <Grid item md={6} xs={6}>
              <Typography variant="h4" component="h2">
                Spyfall
              </Typography>
          </Grid>
          <Grid item md={6} xs={6}>
            {languageOptions.map((language: any) => {
              return (<>
                <Button
                  variant="outlined"
                  onClick={() => changeLanguage(language.key)}
                >
                  {language.value}
                </Button>&nbsp;
                </>
              );
            })}
          </Grid>
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
