import logo from './logo.svg';
import './App.css';
import Page from './components/Page';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { addBlock, reorderBlock, selectBlock } from './actions';
import Toolbar from './components/Toolbar';
import styled from 'styled-components';
import BlockProperties from './components/BlockProperties';
import axios from 'axios';
import DbFormAddCountry from './components/DbFormAddCountry';

const Application = styled.div`
  display: grid;
  grid-template-columns: 100px auto 200px;
`;

function App() {
  const dispatch = useDispatch();
  const page = useSelector(state => state.page);

  // axios.get('http://localhost:5000/api/hello').then(res => console.log(res));

  const handleDrop = result => {
    dispatch(selectBlock(page[result.source.index]));
    if (result.destination.droppableId === 'page'){
      if (result.source.droppableId === 'page') {
        dispatch(reorderBlock(result.draggableId, result.source.index, result.destination.index));
      } else {
        dispatch(addBlock(result.source.index, result.destination.index));
      }
      // dispatch(selectBlock(result.destination.index));
      
    }
    
  }

  return (
    <Application className="App">
      <DragDropContext onDragEnd={handleDrop}>
        <Toolbar />
        <Page />
        {/* <DbFormAddCountry></DbFormAddCountry> */}
        <BlockProperties />
      </DragDropContext>
      
    </Application>
  );
}

export default App;
