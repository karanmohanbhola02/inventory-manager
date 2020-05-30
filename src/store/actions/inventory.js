import actions from '../constants';
import utils from '../../utils';

const addInventory = (inventoryType) => {
    return (dispatch, getState) => {
        const existingInventories = getState().inventory.inventories;
        const inventoryTypes = getState().inventory.inventoryTypes;
        const inventoryCardTemplate = utils.getCardTemplatedBasesOnInventoryType(inventoryTypes, inventoryType);
        
        if(inventoryCardTemplate) {
            const inventories = existingInventories ? [...existingInventories] : [];
            inventories.push(inventoryCardTemplate);
            dispatch({
                type: actions.ADD_INVENTORY,
                payload: inventories || []
            });
        }
    }
}

const removeInventory = (inventoryCardIndex) => {
    return (dispatch, getState) => {
        const existingInventories = getState().inventory.inventories;
        const inventories = existingInventories ? [...existingInventories] : [];
        inventories.splice(inventoryCardIndex, 1);
        dispatch({
            type: actions.REMOVE_INVENTORY,
            payload: inventories || []
        });
    }
}

const editInventory = (inventoryCardIndex, inventoryFieldsData) => {
    return (dispatch, getState) => {
        const existingInventories = getState().inventory.inventories;
        const inventories = existingInventories ? [...existingInventories] : [];
        const editedInventory = {...inventories[inventoryCardIndex]};
        editedInventory.fieldsData = [...inventoryFieldsData];
        inventories.splice(inventoryCardIndex, 1, editedInventory);
        dispatch({
            type: actions.EDIT_INVENTORY,
            payload: inventories || []
        });
    }
}

export default {
    addInventory,
    removeInventory,
    editInventory
}