import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemText, makeStyles, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";

// const reports = [0, 1, 2, 3, 4];
const useStyles = makeStyles({

})

function DialogSaveReport(props) {
  const classes = useStyles();
  const { onClose, open } = props;
  const [ filename, setFilename ] =  useState('')

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (value) => {
    setFilename(value);
    onClose(filename);
  };

  return (
    <Dialog
      maxWidth="md"
      onClose={handleClose}
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
          onChange={e => setFilename(e.target.value)}
          autoFocus
          id="name"
          label="File Name"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => onClose(filename)} color="primary">Save</Button>
      </DialogActions>
      
    </Dialog>
  );
}

export default DialogSaveReport;
