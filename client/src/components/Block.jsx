import React from "react";
import { Draggable } from "react-beautiful-dnd";
import BlockContent from "./BlockContent";
import { useDispatch } from "react-redux";
import { selectBlock } from "../actions";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  block: {
    margin: "20px 50px 0 20px",
    padding: "10px 30px",
    border: "2px solid transparent",
    "&:hover": {
      border: "2px solid lightblue"
    },
    "&:active": {
      backgroundColor: "lightblue"
    }
  }
});

function Block(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Draggable draggableId={props.id} index={props.index} key={selectBlock.id}>
      {(provided) => (
        <Box
          className={classes.block}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={() => dispatch(selectBlock(props))}
        >
          <BlockContent {...props} />
        </Box>
      )}
    </Draggable>
  );
}

export default Block;
