import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import InventoryCardHeader from './InventoryCardHeader';
import TextFieldWithLabel from '../TextFieldWithLabel';
import TextFieldGroup from '../TextFieldGroup';
import DropDown from '../Dropdown';
import ButtonGroup from '../buttons/ButtonGroup';
import { fieldTypes } from '../../constants';

import './InventoryCard.css';

const InventoryTypeCardBody = ({ 
    fieldsData, 
    objectType, 
    handleObjectTypeChange, 
    handleObjectTitleChange, 
    handleFieldChange, 
    selectedOption,
    addInventoryTypeField 
}) => {
    return (
        <div className="inventoryCardBody-container">
            {/* Object Type */}
            <TextFieldWithLabel label={'Object Type'} value={objectType} handleChange={(e) => handleObjectTypeChange('type', e.target.value)} />
            {/* Object Title */}
            <DropDown
                title="Object Title"
                handleChange={handleObjectTitleChange}
                options={fieldsData}
                selectedOption={selectedOption} />
            <div className="fields-container">
                <InputLabel id="dropdown-select-filled-label">{'Fields'}</InputLabel>
                {fieldsData.map((field, index) => {
                    return (
                        <TextFieldGroup 
                            field={field}
                            handleFieldChange={handleFieldChange}
                            index={index} />
                    )
                })}
            </div>
            <div className="inventoryType-buttonGroup-container">
                <ButtonGroup 
                    title="Add Field"
                    alignItems="center"
                    handleButtonItemClick={addInventoryTypeField}
                    options={fieldTypes} />
            </div>
        </div>
    )
};

class InventoryCard extends React.Component {

    handleDeleteCard = () => {
        this.props.removeInventoryType(this.props.inventoryTypeIndex);
    }

    handleObjectTypeChange = (key, value) => {
        let inventoryType = {...this.props.inventoryType};
        inventoryType[key] = value;
        this.props.editInventoryType(this.props.inventoryTypeIndex, inventoryType);
    }

    handleObjectTitleChange = (e) => {
        const titleKey = e.target.value;
        let inventoryType = {...this.props.inventoryType};
        inventoryType.titleKey = titleKey;
        this.props.editInventoryTypeFieldsChange(this.props.inventoryTypeIndex, inventoryType);
    }

    handleFieldChange = (value, fieldIndex) => {
        const inventoryType = {...this.props.inventoryType};
        
        const fields = [...inventoryType.fields];
        
        // update field value
        const fieldData = fields[fieldIndex];
        fieldData.fieldName = value;
        fields.splice(fieldIndex, 1, fieldData);
        inventoryType.fields = fields;

        this.props.editInventoryTypeFieldsChange(this.props.inventoryTypeIndex, inventoryType);
    }

    getSelectedOption = () => {
        let selectedOption = {};
        const field = this.props.inventoryType.fields.find((field) => field.key === this.props.inventoryType.titleKey);
        if (field) {
            selectedOption = field;
        }
        return selectedOption;
    }

    addInventoryTypeField = (fieldType) => {
        const field = {
            fieldName: '',
            key: `field_${Math.random()}`,
            fieldType: fieldType.name
        };
        this.props.addInventoryTypeField(this.props.inventoryTypeIndex, field);
    }

    render() {
        const { inventoryType } = this.props;
        const selectedOption = this.getSelectedOption();
        return (
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                <div className={'inventoryCard-container'}>
                    <InventoryCardHeader type={inventoryType.type} model="" handleDeleteCard={this.handleDeleteCard} />
                    <InventoryTypeCardBody
                        selectedOption={selectedOption}
                        fieldsData={inventoryType.fields}
                        objectType={inventoryType.type || ''}
                        addInventoryTypeField={this.addInventoryTypeField}
                        handleObjectTitleChange={this.handleObjectTitleChange}
                        handleObjectTypeChange={this.handleObjectTypeChange}
                        handleFieldChange={this.handleFieldChange} />
                </div>
            </Grid>
        );
    }
}

export default InventoryCard;