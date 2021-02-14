import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBlock, updateBlock, updateSelectedBlock } from '../../actions';
import { BLOCK_TYPES } from '../../constants/blockTypes';
import { DATASOURCE_DYNAMIC } from '../../constants/datasourceTypes';
import axios from 'axios';

function DatasourceDynamic(props) {

    const selectedBlock = useSelector(state => state.selected);
    let entities = '';
    switch (selectedBlock.type) {
        case BLOCK_TYPES.HEADLINE:
        case BLOCK_TYPES.PARAGRAPH:
            entities = 'texts';
            break;
        case BLOCK_TYPES.IMAGE:
            entities = 'images';
            break;
    }
    const [countries, setCountries] = useState([]);
    const [sources, setSources] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:5000/api/countries`).then(res => setCountries(res.data));
    }, []);
    const [selectedCountry, setSelectedCountry] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:5000/api/${selectedCountry}/${entities}`).then(res => setSources(res.data));
    }, [selectedCountry]);
    const [selectedSource, setSelectedSource] = useState({});
    useEffect(() => {
        setPreview(sources[selectedSource]);
    }, [selectedSource]);

    const [preview, setPreview] = useState(selectedBlock.content);  
    useEffect(() => {
        dispatch(updateSelectedBlock({
            ...selectedBlock,
            content: preview
        }));
    }, [preview]);
    
    const dispatch = useDispatch();

    console.log(sources);
    return (
        <div>
            <div>
                Country: 
                <select onChange={(e) => setSelectedCountry(e.target.value)}>
                    {countries.map(country => <option>{country}</option>)}
                </select>
            </div>
            <div>
                Source:
                <select onChange={(e) => setSelectedSource(e.target.value)}>
                    {Object.keys(sources).map(source => <option>{source}</option>)}
                </select>
            </div>
        </div>
    );
}

export default DatasourceDynamic;