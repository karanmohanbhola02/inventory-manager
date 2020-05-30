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

const InventoryTypeCardBody = ({ fieldsData, handleFieldChange, selectedOption, handleButtonItemClick }) => {
    return (
        <div className="inventoryCardBody-container">
            {/* Object Type */}
            <TextFieldWithLabel label={'Object Type'} value={''} handleChange={(e) => handleFieldChange()} />
            {/* Object Title */}
            <DropDown
                title="Object Title"
                handleChange={handleFieldChange}
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
                    handleButtonItemClick={handleButtonItemClick}
                    options={fieldTypes} />
            </div>
        </div>
    )
};

class InventoryCard extends React.Component {

    handleDeleteCard = () => {
        this.props.removeInventoryType(this.props.inventoryTypeIndex);
    }

    handleFieldChange = (value, fieldIndex) => {
        let fieldsData = this.props.cardData.fieldsData;

        // update field value
        const fieldData = fieldsData[fieldIndex];
        fieldData.value = value;

        fieldsData.splice(fieldIndex, 1, fieldData);

        this.props.editInventory(this.props.cardIndex, fieldsData);
    }

    getSelectedOption = () => {
        let selectedOption = {};
        const field = this.props.inventoryType.fields.find((field) => field.key === this.props.inventoryType.titleKey);
        if (field) {
            selectedOption = field;
        }
        return selectedOption;
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
                        handleFieldChange={this.handleFieldChange} />
                </div>
            </Grid>
        );
    }
}

export default InventoryCard;