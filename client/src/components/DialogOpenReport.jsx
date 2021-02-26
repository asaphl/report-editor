import { Button, Dialog, DialogTitle, List, ListItem, ListItemText } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";

function DialogOpenReport(props) {
  const { onClose, selectedValue, open } = props;

  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/reports")
      .then((res) => setReports(res));
  });

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {reports.map((report) => (
          <ListItem
            button
            onClick={() => handleListItemClick(report)}
            key={report}
          >
            <ListItemText primary={report} />
          </ListItem>
        ))}
      </List>
      <Button>Open</Button>
    </Dialog>
  );
}

export default DialogOpenReport;
