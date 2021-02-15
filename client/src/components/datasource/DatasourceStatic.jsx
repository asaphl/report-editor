import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSelectedBlock } from '../../actions';

function DatasourceStatic(selectedBlock) {
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
            Content: <textarea value={selectedBlock.data.source} onChange={handleChange} />
        </div>
    );
}

export default DatasourceStatic;