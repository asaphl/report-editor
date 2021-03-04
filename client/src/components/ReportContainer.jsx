import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Report from './Report';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minHeight: '100%',
      backgroundColor: 'rgb(245, 245, 245)',
      '& > *': {
        margin: '50px auto',
        width: '90%',
        height: '90%'
      },
    },
    container: {
      
    },
    paper: {
        backgroundColor: 'white',
        borderRadius: 5,
        textAlign: "center"
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