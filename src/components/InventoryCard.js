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
            <div className="inventoryCardHeader-cross" onClick={() => {}}>
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
                    <TextFieldWithLabel label={field.displayName} value={field.value} />
                )
            })}
        </div>
    )
};

class InventoryCard extends React.Component {

    handleDeleteCard = () => {

    }

    render () {
        const { cardData } = this.props;

        console.log(cardData)
        return (
            <div className={'inventoryCard-container'}>
                <InventoryCardHeader type={cardData.type} model={cardData.title || ''} handleDeleteCard={this.handleDeleteCard}/>
                <InventoryCardBody fieldsData={cardData.fieldsData} />
            </div>
        );
    }
}

export default InventoryCard;