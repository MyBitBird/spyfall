import { createMuiTheme } from "@material-ui/core/styles";
import ltr from "./themeLtr";

const theme = createMuiTheme({ ...ltr, direction: "rtl" });

export default theme;
