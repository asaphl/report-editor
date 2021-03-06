import { Grid } from "@material-ui/core";
import React from "react";
import Actions from "./Actions";
import Datasource from "./Datasource";
import Preview from "./Preview";

function RightPanel(props) {
  return (
    <Grid container>
      <Grid item>
        <Datasource />
      </Grid>
      <Grid item>
        <Preview />
      </Grid>
      <Grid item>
        <Actions />
      </Grid>
    </Grid>
  );
}

export default RightPanel;
