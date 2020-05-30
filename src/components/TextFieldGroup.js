import React from 'react';
import TextFieldWithLabel from './TextFieldWithLabel';

import './TextFieldGroup.css';

const TextFieldGroup = ({ field, handleFieldChange, index }) => {
    return (
        <div className={'textFieldGroup-container'}>
            <div className={'textFieldGroup-text'}>
                <TextFieldWithLabel key={field.key} label={''} value={field.fieldName} handleChange={(e) => handleFieldChange(e.target.value, index)} />
            </div>
            <div className={'textFieldGroup-label'}>{field.fieldType}</div>
        </div>
    )
}

export default TextFieldGroup;