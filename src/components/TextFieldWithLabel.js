import React from 'react';
import TextField from '@material-ui/core/TextField';


const TextFieldWithLabel = ({ label, handleChange, value }) => {
    return (
        <TextField
            id="filled-full-width"
            label={label}
            style={{ marginBottom: 8 }}
            placeholder={label}
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true
            }}
            value={value}
            onChange={handleChange}
            variant="filled"
        />
    )
};

export default TextFieldWithLabel;