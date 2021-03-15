import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedBlock } from "../../actions";
import { updateBlockObject } from "../../utils/blockFunctions";
import axios from 'axios';
import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '80%',
    textAlign: 'left'
  }
}));

function DatasourceDynamicCountry(props) {
  const classes = useStyles();
  const selectedBlock = useSelector((state) => state.selected);
  const dispatch = useDispatch();

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get(`${REMOTE_SERVER}api/countries`)
      .then((res) => setCountries(res.data));
  }, []);

  const setSelectedCountry = (selectedCountry) => {
    const updates = {
      data: {
        country: selectedCountry,
      },
    };
    dispatch(updateSelectedBlock(updateBlockObject(selectedBlock, updates)));
  };
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="select-country-label">Country</InputLabel>
      <Select
        labelId="select-country-label"
        id="select-country"
        value={selectedBlock.data?.country || ""}
        onChange={(event) => setSelectedCountry(event.target.value)}
        label="Country"
      >
        <MenuItem value="" disabled>
          Select a country
        </MenuItem>
        {countries.map((country) => (
          <MenuItem value={country.id} key={country.name}>
            {country.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default DatasourceDynamicCountry;
