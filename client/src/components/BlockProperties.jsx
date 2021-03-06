import React from "react";
import Actions from "./datasource/Actions";
import Datasource from "./datasource/Datasource";
import Preview from "./datasource/Preview";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    backgroundColor: 'rgb(245, 245, 245)',
    minHeight: '100%'
  }
});

function BlockProperties(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Datasource />
      <Preview />
      <Actions />
    </Box>
  );
}

export default BlockProperties;
