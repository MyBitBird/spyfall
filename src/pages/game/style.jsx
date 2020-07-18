import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
  },
  button: {
    marginTop: 20,
  },
  card: {
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    margin: "auto",
  },
  locations: {
    textAlign: theme.direction === "rtl" ? "right" : "left",
  },
  locationHeader: {
    textAlign: "center",
    marginTop: 30,
  },
  cardMedia: {
    width: "100%",
    height: "250px",
  },
}));

export default useStyles;
