import React from 'react';
import { useSelector } from 'react-redux';
import Block from './Block';
import { Droppable } from 'react-beautiful-dnd';

function Page(props) {
    const page = useSelector(state => state.page);

    return (
        <Droppable droppableId="page">
        {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
                {page.map((block, i) => <Block {...block} index={i} key={block.id} />)}
                {provided.placeholder}
            </div>
        )}
        </Droppable>
    );
}

export default Page;