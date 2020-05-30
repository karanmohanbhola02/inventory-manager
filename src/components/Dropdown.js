import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './DropDown.css';

const DropDown = ({ handleChange, options, selectedOption, title }) => {
    return (
        <FormControl variant="filled" className="dropDown-container">
            <InputLabel id="dropdown-select-filled-label">{title}</InputLabel>
            <Select
                labelId="dropdown-select-filled-label"
                id="dropdown-simple-select-filled"
                value={selectedOption ? selectedOption.key : ''}
                fullWidth
                onChange={handleChange}
            >
                {options.map((option) => {
                    return <MenuItem value={option.key}>{option.fieldName}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}

export default DropDown;