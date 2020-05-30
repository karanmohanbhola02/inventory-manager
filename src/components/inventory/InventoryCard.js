import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import TextFieldWithLabel from '../TextFieldWithLabel';

import './InventoryCard.css';


const InventoryCardHeader= ({ type, model, handleDeleteCard }) => {
    return (
        <div className="inventoryCardHeader-container">
            <div className="inventoryCardHeader-title">
                {`${type} ${model}`}
            </div>
            <div className="inventoryCardHeader-cross" onClick={handleDeleteCard}>
                <ClearIcon />
            </div>
        </div>
    )
};

const InventoryCardBody = ({ fieldsData, handleFieldChange }) => {
    return (
        <div className="inventoryCardBody-container">
            {fieldsData.map((field, index) => {
                return (
                    <TextFieldWithLabel key={field.key} label={field.displayName} value={field.value} handleChange={(e) => handleFieldChange(e.target.value, index)} />
                )
            })}
        </div>
    )
};

class InventoryCard extends React.Component {

    handleDeleteCard = () => {
        this.props.removeInventory(this.props.cardIndex);
    }

    handleFieldChange = (value, fieldIndex) => {
        let fieldsData = this.props.cardData.fieldsData;

        // update field value
        const fieldData = fieldsData[fieldIndex];
        fieldData.value = value;

        fieldsData.splice(fieldIndex, 1, fieldData);

        this.props.editInventory(this.props.cardIndex, fieldsData);
    }

    getTitle = () => {
        let title = 'No Title';
        const fieldData = this.props.cardData.fieldsData.find((field) => field.key === this.props.cardData.titleKey);
        if(fieldData && fieldData.value) {
            title = fieldData.value;
        }
        return title;
    }

    render () {
        const { cardData } = this.props;
        const title= this.getTitle();
        return (
            <div className={'inventoryCard-container'}>
                <InventoryCardHeader type={cardData.type} model={title} handleDeleteCard={this.handleDeleteCard}/>
                <InventoryCardBody 
                    fieldsData={cardData.fieldsData}
                    handleFieldChange={this.handleFieldChange} />
            </div>
        );
    }
}

export default InventoryCard;