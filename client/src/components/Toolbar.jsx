import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { DEFAULT_BLOCKS } from "../constants/blockTypes";
import ToolbarBlock from "./ToolbarBlock";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
});

function Toolbar(props) {
  const classes = useStyles();

  return (
    <Droppable droppableId="toolbar" isDropDisabled={true}>
      {(provided) => (
        <Box
          className={classes.container}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {DEFAULT_BLOCKS.map((defaultBlock, index) => (
            <ToolbarBlock
              {...defaultBlock}
              key={defaultBlock.type}
              index={index}
            />
          ))}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );
}

export default Toolbar;
