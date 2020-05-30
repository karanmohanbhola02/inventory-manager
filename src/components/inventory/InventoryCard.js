import React from 'react';
import Grid from '@material-ui/core/Grid';
import InventoryCardHeader from './InventoryCardHeader';
import TextFieldWithLabel from '../TextFieldWithLabel';

import './InventoryCard.css';

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
        this.props.removeInventory(this.props.cardData.id, this.props.cardData.type);
    }

    handleFieldChange = (value, fieldIndex) => {
        let fieldsData = this.props.cardData.fieldsData;

        // update field value
        const fieldData = fieldsData[fieldIndex];
        fieldData.value = value;

        fieldsData.splice(fieldIndex, 1, fieldData);

        this.props.editInventory(this.props.cardData.id, this.props.cardData.type, fieldsData);
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
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                <div className={'inventoryCard-container'}>
                    <InventoryCardHeader type={cardData.type} model={title} handleDeleteCard={this.handleDeleteCard}/>
                    <InventoryCardBody 
                        fieldsData={cardData.fieldsData}
                        handleFieldChange={this.handleFieldChange} />
                </div>
            </Grid>
        );
    }
}

export default InventoryCard;