import * as React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export interface DialogProps {
  isOpen: boolean;
  onClose(): void;
  title: String;
}

const FullDialog: React.SFC<DialogProps> = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog open={props.isOpen} fullScreen={fullScreen} onClose={props.onClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>{props.children}</DialogContent>
    </Dialog>
  );
};

export default FullDialog;
