import React from "react";
import { useSelector } from "react-redux";
import {
  DATASOURCE_STATIC,
  DATASOURCE_DYNAMIC,
} from "../../constants/datasourceTypes";
import DatasourceStatic from "./DatasourceStatic";
import DatasourceDynamic from "./DatasourceDynamic";
import DatasourceType from "./DatasourceType";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "100%",
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
});

function Datasource(props) {
  const classes = useStyles();
  const selectedBlock = useSelector((state) => state.selected);

  if (!selectedBlock) return null;

  const renderProperties = (type) => {
    if (type === DATASOURCE_STATIC) return <DatasourceStatic />;
    if (type === DATASOURCE_DYNAMIC) return <DatasourceDynamic />;
  };

  return (
    <div className={classes.container}>
      <Box className={classes.header}>Data Source</Box>
      <DatasourceType />
      {renderProperties(selectedBlock?.data?.type)}
    </div>
  );
}

export default Datasource;
