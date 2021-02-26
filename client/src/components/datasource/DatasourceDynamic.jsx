import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedBlock } from '../../actions';
import { BLOCK_TYPE_SOURCE } from '../../constants/blockTypes';
import axios from 'axios';
import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import { loadSourceIntoBlockData } from '../../utils/blockFunctions';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white'
    },
    formControl: {
      margin: theme.spacing(1),
      width: '80%',
      textAlign: 'left'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function DatasourceDynamic(props) {
    const classes = useStyles();
    const selectedBlock = useSelector(state => state.selected);
    const dispatch = useDispatch();

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/countries`).then(res => setCountries(res.data));
    }, []);

    const [sources, setSources] = useState([])

    useEffect(() => {
        const selectedCountry = selectedBlock.data?.country;
        if (!selectedCountry) return;
        axios.get(`http://localhost:5000/api/countries/${selectedCountry}/${BLOCK_TYPE_SOURCE[selectedBlock.type]}`).then(res => setSources(res.data));        
    }, [selectedBlock]);

    const setSelectedCountry = (selectedCountry) => {
        dispatch(updateSelectedBlock({
            ...selectedBlock,
            data: {
                ...selectedBlock.data,
                country: selectedCountry
            }
        }));
    }   

    const setSelectedSource = (selectedSource) => {
        const newSource = sources.find(source => source.id === selectedSource);
        if (newSource) dispatch(updateSelectedBlock(loadSourceIntoBlockData(selectedBlock, newSource)));
    }

    return (
        <div className={classes.root}>
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="select-country-label">Country</InputLabel>
                    <Select
                    labelId="select-country-label"
                    id="select-country"
                    value={selectedBlock.data?.country || ""}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    label="Country"
                    >
                    <MenuItem value="" disabled>Select a country</MenuItem>
                    {countries.map(country => <MenuItem value={country.id} key={country.name}>{country.name}</MenuItem>)}
                    </Select>
                </FormControl>


            </div>
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="select-country-label">Source</InputLabel>
                    <Select
                    labelId="select-source-label"
                    id="select-source"
                    value={selectedBlock.data?.sourceId || ""}
                    onChange={(e) => setSelectedSource(e.target.value)}
                    label="Source"
                    >
                    <MenuItem value="" disabled>Select a source</MenuItem>
                    {sources.map(source => <MenuItem value={source.id} key={source.id}>{source.title}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

export default DatasourceDynamic;