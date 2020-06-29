import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export interface DialogProps {
  isOpen: boolean;
  title: String;
  approve :{title: string , action(): void}
  close :{title: string , action(): void}
}

const FullDialog: React.SFC<DialogProps> = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog open={props.isOpen} fullScreen={fullScreen} onClose={props.close.action}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>{props.children}</DialogContent>
      <DialogActions>
        <Button onClick={props.approve.action} color="secondary">
          {props.approve.title}
        </Button>
        <Button onClick={props.close.action} color="primary">
          {props.close.title}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FullDialog;
