import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';

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

export default InventoryCardHeader;