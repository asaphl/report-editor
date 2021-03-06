import React from "react";
import { useSelector } from "react-redux";
import Block from "./Block";
import { Droppable } from "react-beautiful-dnd";

function Report(props) {
  const blocks = useSelector((state) => state.blocks);
  const renderBlocks = () => {
    if (!blocks.length)
      return (
        <div>Open a report, or start dragging blocks to start editing</div>
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
