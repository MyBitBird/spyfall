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
    textAlign: "left",
    flex: 1,
  },
  deleteButton: {
    cursor: "pointer",
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
  }
}));

export default useStyles;
