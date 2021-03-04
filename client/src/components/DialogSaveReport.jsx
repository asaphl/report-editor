import { Button, Dialog, DialogTitle, List, ListItem, ListItemText, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";

// const reports = [0, 1, 2, 3, 4];

function DialogSaveReport(props) {
  const { onClose, open } = props;
  const [ filename, setFilename ] =  useState('')

  const handleClose = () => {
    onClose(filename);
  };

  const handleSubmit = (value) => {
    setFilename(value);
    handleClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="dialog-save-as"
      open={open}
    >
      <DialogTitle id="dialog-save-as">Save As</DialogTitle>
      <TextField value={filename} onChange={e => setFilename(e.target.value)} />
      <Button onClick={() => onClose(filename)}>Save</Button>
    </Dialog>
  );
}

export default DialogSaveReport;
