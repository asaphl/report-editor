import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dialog, DialogTitle, DialogActions, List, ListItem, ListItemAvatar, ListItemText, Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";

// const reports = [0, 1, 2, 3, 4];

function DialogOpenReport(props) {
  const { onClose, selectedValue, open, reports } = props;
  const [ current, setCurrent ] =  useState(selectedValue)

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
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
          <ListItemAvatar>
            <Avatar>
              <FontAwesomeIcon icon={faFile} />
            </Avatar>
          </ListItemAvatar>
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
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle id="dialog-open">Open Report</DialogTitle>
      <List>
        {renderList()}
      </List>
      <DialogActions>
      <Button onClick={() => onClose(current)} color="primary">Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogOpenReport;
