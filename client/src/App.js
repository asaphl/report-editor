import './App.css';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { addBlock, reorderBlock, selectBlock } from './actions';
import Toolbar from './components/Toolbar';
import styled from 'styled-components';
import BlockProperties from './components/BlockProperties';
import ReportContainer from './components/ReportContainer';
import AppMenu from './components/AppMenu';
import Toolbar2 from './components/Toolbar2';
import { Grid, makeStyles } from '@material-ui/core';

const Application = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 100px auto 200px;
`;

const useStyles = makeStyles({
  container: {
    display: "grid",
    height: "100vh",
    width: "100vw",
    gridTemplateColumns: "100px auto 200px",
    gridTemplateRows: "auto 100%",
    gridTemplateAreas: "'appbar appbar appbar' 'toolbar report block'"
  },
  appbar: {
    gridArea: "appbar"
  },
  toolbar: {
    gridArea: "toolbar"
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
  const report = useSelector(state => state.report);

  const handleDrag = res => {
    // console.log(res)
  }

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
    <DragDropContext onDragStart={handleDrag} onDragEnd={handleDrop}>
    <div className={classes.container}>
      <div className={classes.appbar}>
        <AppMenu />
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


// <DragDropContext onDragStart={handleDrag} onDragEnd={handleDrop}>
// <Grid container spacing={0}>
//   <Grid item xs={12}>
//     <AppMenu />
//   </Grid>
//   <Grid item xs={1}>
//     <Toolbar />
//   </Grid>
//   <Grid item xs={8}>
//     <ReportContainer />
//   </Grid>
//   <Grid item xs={3}>
//     <BlockProperties />
//   </Grid>
// </Grid>

// </DragDropContext>