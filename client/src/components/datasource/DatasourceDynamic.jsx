import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBlock, updateBlock, updateSelectedBlock } from '../../actions';
import { BLOCK_TYPES, BLOCK_TYPE_SOURCE } from '../../constants/blockTypes';
import { DATASOURCE_DYNAMIC } from '../../constants/datasourceTypes';
import axios from 'axios';
import { selectActiveValue } from '../../utils/uiFunctions';

function DatasourceDynamic(props) {
    const selectedBlock = useSelector(state => state.selected);
    const dispatch = useDispatch();

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/countries`).then(res => setCountries(res.data));
    }, []);

    const [selectedCountry, setSelectedCountry] = useState((selectedBlock.data.country) ? selectedBlock.data.country : '' );
    const [sources, setSources] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/countries/${selectedCountry}/${BLOCK_TYPE_SOURCE[selectedBlock.type]}`).then(res => setSources(res.data));
        dispatch(updateSelectedBlock({
            ...selectedBlock,
            data: {
                ...selectedBlock.data,
                country: selectedCountry
            }
        }));
        
    }, [selectedCountry]);

    const [selectedSource, setSelectedSource] = useState((selectedBlock.data?.source?.id) ? selectedBlock.data.source.id : '' );
    
    useEffect(() => {
        const newData = {
            source: sources.find(source => source.id == selectedSource), 
        };
        if (newData.source) {
            dispatch(updateSelectedBlock({
                ...selectedBlock,
                data: {
                    ...selectedBlock.data,
                    ...newData
                }
            }))
        }
    }, [selectedSource]);

    const getSource = () => {
        try {
            console.log(selectedBlock.data.source.id);
            return selectActiveValue(selectedBlock.data.source.id);
        } catch (err) {
            console.log(err)
            return '';
        }
    }

    return (
        <div>
            <div>
                Country: 
                <select value={selectActiveValue(selectedBlock.data.country)} onChange={(e) => setSelectedCountry(e.target.value)}>
                    <option value='' disabled>Select a country</option>
                    {countries.map(country => <option>{country}</option>)}
                </select>
            </div>
            <div>
                Source:
                <select value={selectedSource} onChange={(e) => setSelectedSource(e.target.value)}>
                    <option value='' disabled>Select a data source</option>
                    {sources.map(source => <option value={source.id}>{source.title}</option>)}
                </select>
            </div>
        </div>
    );
}

export default DatasourceDynamic;