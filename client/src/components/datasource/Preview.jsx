import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import BlockContent from "../BlockContent";

const useStyles = makeStyles({
  container: {
    height: "200px",
    overflow: "hidden",
  },
  header: {
    color: "rgb(100, 100, 100)",
    backgroundColor: "rgb(245, 245, 245)",
    borderBottom: "1px solid grey",
    fontWeight: "400",
    paddingTop: "5px",
    paddingBottom: "5px",
    textAlign: "center",
  },
  preview: {
    display: "inherit",
    color: "rgb(100, 100, 100)",
    backgroundColor: "rgb(255, 255, 255)",
    height: "150px",
    overflowY: "scroll",
    marginBottom: "15px",
    textAlign: "center",
  },
});

function Preview(props) {
  const classes = useStyles();
  const selectedBlock = useSelector((state) => state.selected);

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>Preview</Box>
      <Box className={classes.preview}>
        <BlockContent {...selectedBlock} />
      </Box>
    </Box>
  );
}

export default Preview;
