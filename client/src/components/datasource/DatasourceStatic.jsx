import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBlock, updateBlock } from '../../actions';
import { BLOCK_TYPES } from '../../constants/blockTypes';
import { DATASOURCE_STATIC } from '../../constants/datasourceTypes';
import { updateSelectedBlock } from '../../actions';

function DatasourceStatic(props) {
    const selectedBlock = useSelector(state => state.selected);
    // const [text, setText] = useState(selectedBlock.content);
    const { source } = selectedBlock.data;
    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(updateSelectedBlock({
            ...selectedBlock,
            data: {
                ...selectedBlock.data,
                source: e.target.value
            }
        }));
    }

    return (
        <div>
            Content: <textarea value={source} onChange={handleChange} />
        </div>
    );
}

export default DatasourceStatic;