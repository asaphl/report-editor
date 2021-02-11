import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBlock, updateBlock, updateSelectedBlock } from '../../actions';
import { BLOCK_TYPES } from '../../constants/blockTypes';
import { DATASOURCE_REMOTE } from '../../constants/datasourceTypes';

function DatasourceRemote(props) {
    const selectedBlock = useSelector(state => state.selected);
    // const [text, setText] = useState(selectedBlock.data.params.title);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     setText(selectedBlock.data.params.title);
    // }, [selectedBlock]);

    const setTitles = e => {
        dispatch(updateSelectedBlock({
            ...selectedBlock,
            data: {
                ...selectedBlock.data,
                params: {
                    ...selectedBlock.data.params,
                    titles: e.target.value,
                    origin: '*'
                }
            }
        }));
    }

    const setQueryString = () => {
        const { data } = selectedBlock;
        const queryString = Object.keys(selectedBlock.data.params).map(key => key + '=' + data.params[key]).join('&');
        console.log(selectedBlock.data.url + '?' + queryString);
        axios.get(selectedBlock.data.url, selectedBlock.data.params, data.config).then(res => console.log(res));
    }

    return (
        <div>
            Source: <input type='text' value={selectedBlock.data.src} />
            Data Type: 
            <select>
                <option>Title</option>
                <option>Abstract</option>
            </select>
            Search: <input type='text' value={selectedBlock.data.params.titles} onChange={setTitles} />
            <button onClick={setQueryString}>Search</button>

            
            <button onClick={() => dispatch(removeBlock(selectedBlock))}>Delete</button>
        </div>
    );
}

export default DatasourceRemote;

// <button onClick={() => dispatch(updateBlock({
//     ...selectedBlock,
//     content: selectedBlock.content,
//     data: {
//         type: DATASOURCE_REMOTE,
//         content: selectedBlock.content
//     }
// }))}>Update</button>