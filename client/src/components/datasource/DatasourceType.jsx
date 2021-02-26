import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSelectedBlock } from '../../actions';
import { DATASOURCE_DYNAMIC, DATASOURCE_STATIC } from '../../constants/datasourceTypes';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white'
},
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '80%',
    textAlign: 'left'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function DatasourceType(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const setDataType = e => {
        const dataType = e.target.value;
        const updatedBlock = {
            ...props,
            data: {
                ...props.data,
                type: dataType
            }
        }

        dispatch(updateSelectedBlock(updatedBlock));
    }

    return (
        <div className={classes.root}>
        
            {/*Datasource Type:*/}
            <FormControl className={classes.formControl}>
            <InputLabel id="data-type-label">Data Type</InputLabel>
            <Select
              labelId="data-type-label"
              id="data-type"
              value={props.data.type || ''}
              onChange={setDataType}
            >
              <MenuItem value={''} disabled>Please choose a data type</MenuItem>
              <MenuItem value={DATASOURCE_STATIC}>Static</MenuItem>
              <MenuItem value={DATASOURCE_DYNAMIC}>Dynamic</MenuItem>
            </Select>
          </FormControl>


            
        </div>
    );
}

export default DatasourceType;

// <select value={props.data.type || ''} onChange={(e) => setDataType(e.target.value)}>
//                 <option value='' disabled selected>Please select a data source</option>
//                 <option value={DATASOURCE_STATIC}>Static</option>
//                 <option value={DATASOURCE_DYNAMIC}>Dynamic</option>
//             </select>