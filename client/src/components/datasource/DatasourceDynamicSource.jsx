import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedBlock } from "../../actions";
import { loadSourceIntoBlockData } from "../../utils/blockFunctions";
import { BLOCK_TYPE_SOURCE } from '../../constants/blockTypes';
import axios from 'axios';
import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '80%',
    textAlign: 'left'
  }
}));

function DatasourceDynamicSource(props) {
  const classes = useStyles();
  const selectedBlock = useSelector((state) => state.selected);
  const dispatch = useDispatch();

  const [sources, setSources] = useState([]);

  useEffect(() => {
    const selectedCountry = selectedBlock.data?.country;
    if (!selectedCountry) return;
    axios
      .get(
        `api/countries/${selectedCountry}/${
          BLOCK_TYPE_SOURCE[selectedBlock.type]
        }`
      )
      .then((res) => setSources(res.data));
  }, [selectedBlock]);

  const setSelectedSource = (selectedSource) => {
    const newSource = sources.find((source) => source.id === selectedSource);
    if (newSource)
      dispatch(
        updateSelectedBlock(loadSourceIntoBlockData(selectedBlock, newSource))
      );
  };
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="select-country-label">Source</InputLabel>
      <Select
        labelId="select-source-label"
        id="select-source"
        value={selectedBlock.data?.sourceId || ""}
        onChange={(event) => setSelectedSource(event.target.value)}
        label="Source"
      >
        <MenuItem value="" disabled>
          Select a source
        </MenuItem>
        {sources.map((source) => (
          <MenuItem value={source.id} key={source.id}>
            {source.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default DatasourceDynamicSource;
