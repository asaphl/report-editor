import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedBlock } from "../../actions";
import {
  DATASOURCE_DYNAMIC,
  DATASOURCE_STATIC,
} from "../../constants/datasourceTypes";
import { updateBlockObject } from "../../utils/blockFunctions";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "80%",
    textAlign: "left",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function DatasourceType(props) {
  const classes = useStyles();
  const selectedBlock = useSelector((state) => state.selected);
  const dispatch = useDispatch();

  const setDataType = (event) => {
    const update = {
      data: { type: event.target.value }
    };
    const updatedBlock = updateBlockObject(selectedBlock, update)
    dispatch(updateSelectedBlock(updatedBlock));
  };

  return (
    <Box className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel id="data-type-label">Data Type</InputLabel>
        <Select
          labelId="data-type-label"
          id="data-type"
          value={selectedBlock.data.type || ""}
          onChange={setDataType}
        >
          <MenuItem value={""} disabled>
            Please choose a data type
          </MenuItem>
          <MenuItem value={DATASOURCE_STATIC}>Static</MenuItem>
          <MenuItem value={DATASOURCE_DYNAMIC}>Dynamic</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default DatasourceType;
