import { makeStyles } from "@material-ui/core";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import BlockContent from "./BlockContent";

const useStyles = makeStyles({
  container: {
    border: "2px solid indigo",
    padding: "20px",
    backgroundColor: "white",
    margin: "5px",
    textAlign: "center",
  }
});

function ToolbarBlock(props) {
  const { type, index } = props;
  const classes = useStyles();

  return (
    <Draggable draggableId={type} index={index} key={type}>
      {(provided, snapshot) => (
        <React.Fragment>
          <div>
            <div
              className={classes.container}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              isDragging={snapshot.isDragging}
            >
              <BlockContent {...props} />
            </div>
          </div>
          {snapshot.isDragging && (
            <div className={classes.container}>
              <BlockContent {...props} />
            </div>
          )}
        </React.Fragment>
      )}
    </Draggable>
  );
}

export default ToolbarBlock;
