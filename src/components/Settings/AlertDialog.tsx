import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

interface AlertDialogProps {
  children: React.ReactElement;
  open: boolean;
  onClose: () => void;
  onAccept: () => void;
  title: string;
}
const AlertDialog: React.FC<AlertDialogProps> = ({
  children,
  open,
  onAccept,
  onClose,
  title,
}) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>{children}</DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Disagree
      </Button>
      <Button onClick={onAccept} color="primary" autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Dialog>
);

export default AlertDialog;
