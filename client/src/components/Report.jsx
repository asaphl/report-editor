import React from 'react';
import { useSelector } from 'react-redux';
import Block from './Block';
import { Droppable } from 'react-beautiful-dnd';

function Report(props) {
    const report = useSelector(state => state.report);

    return (
        <Droppable droppableId="report">
        {(provided) => (
            <div id="print-report" ref={provided.innerRef} {...provided.droppableProps}>
                {report.map((block, i) => <Block {...block} index={i} key={block.id} />)}
                {provided.placeholder}
            </div>
        )}
        </Droppable>
    );
}

export default Report;