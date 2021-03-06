import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    overflowY: 'auto'
  }
})
function DialogOpenReportFileList(props) {
  const { handleItemSelect, reports } = props;
  const classes = useStyles();

  if (!reports) return null;
  return (
    <List className={classes.root}>
      {reports.map((report) => (
        <ListItem
          button
          onClick={() => handleItemSelect(report.id)}
          key={report.id}
        >
          <ListItemAvatar>
            <Avatar>
              <FontAwesomeIcon icon={faFile} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={report.name} />
        </ListItem>
      ))}
    </List>
  );
}

export default DialogOpenReportFileList;
