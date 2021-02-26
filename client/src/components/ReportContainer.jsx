import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Report from './Report';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      height: '100%',
      overflowY: 'scroll',
      backgroundColor: 'rgb(245, 245, 245)',
      '& > *': {
        margin: 'auto',
        width: '90%',
        height: '90%'
      },
    },
    container: {
      
    },
    paper: {
        backgroundColor: 'white',
        borderRadius: 5,
    }
  }));

function ReportContainer(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <div className={classes.container}>
            <div className={classes.paper}>
                <Report />
            </div>
            </div>
        </div>
    );
}

export default ReportContainer;