import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { selectBlock } from '../actions';
import BlockContent from './BlockContent';

const DraggableToolbarBlock = styled.div`
    border: 2px solid indigo;
    padding: 20px;
    background-color: white;
    margin-bottom:10px;

    // display: flex;
    // user-select: none;
    // padding: 0.5rem;
    // margin: 0 0 0.5rem 0;
    // align-items: flex-start;
    // align-content: flex-start;
    // line-height: 1.5;
    // border-radius: 3px;
    // background: #fff;
    // border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
`;

const Clone = styled(DraggableToolbarBlock)`
    + div {
        display: none !important;
    }
`;

// function getStyles(style, snapshot) {
//     if (!snapshot.isDropAnimating) {
//       return style;
//     }
//     return {
//       ...style,
//       // cannot be 0, but make it super tiny
//       transitionDuration: `0.001s`,
//     };
//   }

function ToolbarBlock(props) {
    const dispatch = useDispatch();
    const { type, index } = props;
    return (
        <Draggable draggableId={type} index={index} key = {type}>
        { (provided, snapshot) => (
            <React.Fragment>
            <div>
                <DraggableToolbarBlock 
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                >
                    <BlockContent {...props} />
                </DraggableToolbarBlock>
                </div>
                {
                    snapshot.isDragging && (
                        <Clone>
                            CLONE
                        </Clone>
                    )
                }
            </React.Fragment>
            
        )}
        
        </Draggable>
    );
}

export default ToolbarBlock;