import React from 'react';
import TextField from '@material-ui/core/TextField';


class TextFieldWithLabel extends React.Component {
    render () {
        const { label, handleChange, value } = this.props;
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
    }
}

export default TextFieldWithLabel;