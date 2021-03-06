import { makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedBlock } from "../../actions";
import { updateStaticContentOfBlock } from "../../utils/blockFunctions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
  },
  formControl: {
    margin: theme.spacing(1),
    width: "80%",
    textAlign: "left",
  },
}));

function DatasourceStatic(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedBlock = useSelector((state) => state.selected);

  const handleChange = (event) => {
    dispatch(
      updateSelectedBlock(
        updateStaticContentOfBlock(selectedBlock, event.target.value)
      )
    );
  };

  return (
    <div className={classes.root}>
      <TextField
        id="outlined-multiline-flexible"
        label="Content"
        multiline
        rowsMax={4}
        value={selectedBlock.data?.content || ""}
        onChange={event => handleChange(event)}
        variant="outlined"
        className={classes.formControl}
      />
    </div>
  );
}

export default DatasourceStatic;
