import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
  },
  player: {
    textAlign: "center",
    padding: "15px",
    display: "flex",
  },
  playerTitle: {
    textAlign: theme.direction === "rtl" ? "right" : "left",
  },
  deleteButton: {
    cursor: "pointer",
    textAlign: theme.direction === "rtl" ? "left" : "right",
  },
  buttons: {
    marginTop: 20,
  },
  code: {
    border: "none",
    backgroundColor: "transparent",
    font: "inherit",
    textAlign: "center",
    width: 110,
    height: 26,
    overflow: "hidden",
  },
}));

export default useStyles;
