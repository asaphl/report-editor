import React from "react";
import { useSelector } from "react-redux";
import Block from "./Block";
import { Droppable } from "react-beautiful-dnd";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  emptyDocument: {
    padding: '50px'
  }
});

function Report(props) {
  const classes = useStyles();
  const blocks = useSelector((state) => state.blocks);
  const renderBlocks = () => {
    if (!blocks.length)
      return (
        <Box className={classes.emptyDocument}>Open a report, or start dragging blocks to start editing</Box>
      );
    return blocks.map((block, i) => (
      <Block {...block} index={i} key={block.id} />
    ));
  };
  return (
    <Droppable droppableId="report">
      {(provided) => (
        <div
          id="print-report"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {renderBlocks()}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Report;
