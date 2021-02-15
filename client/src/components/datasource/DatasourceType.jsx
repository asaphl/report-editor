import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSelectedBlock } from '../../actions';
import { DATASOURCE_DYNAMIC, DATASOURCE_STATIC } from '../../constants/datasourceTypes';

function DatasourceType(props) {
    const dispatch = useDispatch();

    const setDataType = dataType => {
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
        <div>
        
            Datasource Type:
            <select value={props.data.type || ''} onChange={(e) => setDataType(e.target.value)}>
                <option value='' disabled selected>Please select a data source</option>
                <option value={DATASOURCE_STATIC}>Static</option>
                <option value={DATASOURCE_DYNAMIC}>Dynamic</option>
            </select>
        </div>
    );
}

export default DatasourceType;