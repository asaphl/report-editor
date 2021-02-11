import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBlock, updateBlock, updateSelectedBlock } from '../../actions';
import { BLOCK_TYPES } from '../../constants/blockTypes';
import { DATASOURCE_LOCAL } from '../../constants/datasourceTypes';
import axios from 'axios';

function DatasourceLocal(props) {

    const selectedBlock = useSelector(state => state.selected);
    useEffect(() => {
        axios.get('http://localhost:5000/api/tables').then(res => setTables(res.data));
    }, [selectedBlock]);

    const [tables, setTables] = useState([]);
    const [selectedTable, setSelectedTable] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:5000/api/table/${selectedTable}/columns`).then(res => setFields(res.data))
    }, [selectedTable]);

    const [fields, setFields] = useState([]);
    const [selectedField, setSelectedField] = useState(0);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/table/${selectedTable}/column/${selectedField}`).then(res => setPreview(res.data));
    }, [selectedField]);

    const [preview, setPreview] = useState(selectedBlock.content);  
    useEffect(() => {
        dispatch(updateSelectedBlock({
            ...selectedBlock,
            content: preview
        }));
    }, [preview]);
    
    const dispatch = useDispatch();

    const selectTable = e => {
        setSelectedTable(e.target.value);
    }

    const selectField = e => {
        setSelectedField(e.target.value);
    }

    
    console.log(fields);
    return (
        <div>
            <div>
            Table: 
            <select onChange={selectTable}>
                {tables.map(tableName => <option>{tableName}</option>)}
            </select>
            </div>
            <div>
            Field:
            <select onChange={selectField}>
            {fields.map(fieldName => <option>{fieldName}</option>)}
            </select>
            </div>
        </div>
    );
}

export default DatasourceLocal;