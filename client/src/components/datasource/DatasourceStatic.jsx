import { makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSelectedBlock } from '../../actions';
import { BLOCK_TYPES } from '../../constants/blockTypes';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white'
    },
    formControl: {
      margin: theme.spacing(1),
      width: '80%',
      textAlign: 'left'
    }
  }));


function DatasourceStatic(selectedBlock) {
    const classes = useStyles();
    const dispatch = useDispatch();

    // const [text, setText] = useState(typeof(selectedBlock.data.source) === "String" ? selectedBlock.data.source : "");


    const handleChange = e => {
        if (selectedBlock.type === BLOCK_TYPES.IMAGE){
            dispatch(updateSelectedBlock({
                ...selectedBlock,
                data: {
                    ...selectedBlock.data,
                    path: e.target.value
                }
            }));       
        }else{
            dispatch(updateSelectedBlock({
                ...selectedBlock,
                data: {
                    ...selectedBlock.data,
                    content: e.target.value
                }
            }));

        }
        
    }

    return (
        <div className={classes.root}>
            <TextField
            id="outlined-multiline-flexible"
            label="Content"
            multiline
            rowsMax={4}
            value={(selectedBlock.data?.content) || ""}
            onChange={e => handleChange(e)}
            variant="outlined"
            className={classes.formControl}
            />
        </div>
    );
}

export default DatasourceStatic;