import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBlock, removeBlock } from '../../actions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        padding: '5px',
        alignSelf: 'end'
    }
});


function Actions(props) {
    const classes = useStyles();
    const selectedBlock = useSelector(state => state.selected);
    const dispatch = useDispatch();

    return (
        <div className={classes.root}>
        <Button variant='contained' disableElevation onClick={() => dispatch(updateBlock({ ...selectedBlock }))}>Update</Button>&nbsp;
        <Button variant='contained' disableElevation onClick={() => dispatch(removeBlock(selectedBlock))}>Delete</Button>
        </div>
    );
}

export default Actions;