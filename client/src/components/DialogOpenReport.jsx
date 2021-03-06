import { Button, Dialog, DialogTitle, DialogActions } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DialogOpenReportFileList from "./DialogOpenReportFileList";

function DialogOpenReport(props) {
  const { onClose, open, reports } = props;
  const [ filename, setFilename ] = useState(null);

  useEffect(() => {
    closeDialog()
  }, [filename])

  const closeDialog = () => {
    onClose(filename);
  };

  const selectAndClose = filename => {
    setFilename(filename);
  }

  return (
    <Dialog
      onClose={closeDialog}
      aria-labelledby="dialog-open-file"
      open={open}
      maxWidth="xs"
      fullWidth
      style={{overflow: 'hidden'}}
    >
      <DialogTitle id="dialog-open-file">Open Report</DialogTitle>
      <DialogOpenReportFileList
        handleItemSelect={selectAndClose}
        reports={reports}
      />
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogOpenReport;
