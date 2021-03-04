import { Button, Dialog, DialogTitle, List, ListItem, ListItemText } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";

// const reports = [0, 1, 2, 3, 4];

function DialogOpenReport(props) {
  const { onClose, selectedValue, open, reports } = props;
  const [ current, setCurrent ] =  useState(selectedValue)

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    setCurrent(value);
  };

  const renderList = () => {
    if (!reports) {
      return null;
    } else {
      return reports.map((report) => (
        <ListItem
          button
          onClick={() => handleListItemClick(report.id)}
          key={report.id}
        >
          <ListItemText primary={report.name} />
        </ListItem>
      ))
    }
  }
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="dialog-open"
      open={open}
    >
      <DialogTitle id="dialog-open">Open Report</DialogTitle>
      <List>
        {renderList()}
      </List>
      <Button onClick={() => onClose(current)}>Open</Button>
    </Dialog>
  );
}

export default DialogOpenReport;
