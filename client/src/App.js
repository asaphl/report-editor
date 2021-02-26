import './App.css';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { addBlock, reorderBlock, selectBlock } from './actions';
import Toolbar from './components/Toolbar';
import styled from 'styled-components';
import BlockProperties from './components/BlockProperties';
import ReportContainer from './components/ReportContainer';
import AppMenu from './components/AppMenu';

const Application = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 100px auto 200px;
`;

function App() {
  const dispatch = useDispatch();
  const report = useSelector(state => state.report);

  const handleDrop = result => {
    dispatch(selectBlock(report[result.source.index]));
    if (result.destination === null) return;
    if (result.destination.droppableId === 'report'){
      if (result.source.droppableId === 'report') {
        dispatch(reorderBlock(result.draggableId, result.source.index, result.destination.index));
      } else {
        dispatch(addBlock(result.source.index, result.destination.index));
      }     
    }
  }

  return (
    <div className="App">
      <AppMenu />
      <Application>
      <DragDropContext onDragEnd={handleDrop}>
        <Toolbar />
        <ReportContainer />
        <BlockProperties />
      </DragDropContext>
      </Application>
    </div>
  );
}

export default App;
