import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import TextFieldWithLabel from './TextFieldWithLabel';

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

const InventoryCardBody = ({ fieldsData }) => {
    return (
        <div className="inventoryCardBody-container">
            {fieldsData.map((field) => {
                return (
                    <TextFieldWithLabel key={field.key} label={field.displayName} value={field.value} />
                )
            })}
        </div>
    )
};

class InventoryCard extends React.Component {

    handleDeleteCard = () => {
        this.props.removeInventory(this.props.cardIndex);
    }

    getTitle = () => {
        const title = this.props.cardData.fieldsData.find((field) => field.key === this.props.cardData.titleKey);
        return title ? title.value : '';
    }

    render () {
        const { cardData } = this.props;
        const title= this.getTitle();
        return (
            <div className={'inventoryCard-container'}>
                <InventoryCardHeader type={cardData.type} model={title} handleDeleteCard={this.handleDeleteCard}/>
                <InventoryCardBody fieldsData={cardData.fieldsData} />
            </div>
        );
    }
}

export default InventoryCard;