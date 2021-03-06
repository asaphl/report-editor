import React from "react";
import { makeStyles } from "@material-ui/core";
import DatasourceDynamicCountry from "./DatasourceDynamicCountry";
import DatasourceDynamicSource from "./DatasourceDynamicSource";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
  },
}));

function DatasourceDynamic(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DatasourceDynamicCountry />
      <DatasourceDynamicSource />
    </div>
  );
}

export default DatasourceDynamic;
