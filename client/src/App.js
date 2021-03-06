import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { addBlock, reorderBlock, selectBlock } from './actions';
import Toolbar from './components/Toolbar';
import BlockProperties from './components/BlockProperties';
import ReportContainer from './components/ReportContainer';
import AppHeader from './components/AppHeader';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: "grid",
    height: "100vh",
    width: "100vw",
    gridTemplateColumns: "100px auto 200px",
    gridTemplateRows: "60px auto",
    gridTemplateAreas: "'appbar appbar appbar' 'toolbar report block'"
  },
  appbar: {
    gridArea: "appbar"
  },
  toolbar: {
    gridArea: "toolbar",
    backgroundColor: "white"
  },
  report: {
    gridArea: "report",
    overflowY: "auto"
  },
  block: {
    gridArea: "block"
  }
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const blocks = useSelector(state => state.blocks);

  const handleDrop = result => {
    dispatch(selectBlock(blocks[result.source.index]));
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
    <DragDropContext onDragEnd={handleDrop}>
    <div className={classes.container}>
      <div className={classes.appbar}>
        <AppHeader />
      </div>
      <div className={classes.toolbar}>
        <Toolbar />
      </div>
      <div className={classes.report}>
        <ReportContainer />
      </div>
      <div className={classes.block}>
        <BlockProperties />
      </div>
    </div>

  </DragDropContext>
  );
}

export default App;