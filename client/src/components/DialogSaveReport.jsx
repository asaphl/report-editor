import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

function DialogSaveReport(props) {
  const { onClose, open } = props;
  const [filename, setFilename] = useState("");

  const closeDialog = (event, save = false) => {
    onClose(save ? filename : null);
  };

  return (
    <Dialog
      maxWidth="md"
      onClose={closeDialog}
      aria-labelledby="dialog-save-as"
      open={open}
    >
      <DialogTitle id="dialog-save-as">Save As</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter a file name to save your report
        </DialogContentText>
        <TextField
          value={filename}
          onChange={event => setFilename(event.target.value)}
          autoFocus
          id="name"
          label="File Name"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          Cancel
        </Button>
        <Button onClick={(event) => closeDialog(event, true)} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogSaveReport;
