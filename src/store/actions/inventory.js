import actions from '../constants';
import utils from '../../utils';

const addInventory = (inventoryType) => {
    return (dispatch, getState) => {
        const existingInventories = getState().inventory.inventories;
        const inventoryTypes = getState().inventory.inventoryTypes;
        const inventoryCardTemplate = utils.getCardTemplatedBasesOnInventoryType(inventoryTypes, inventoryType);

        if (inventoryCardTemplate) {
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
        const editedInventory = { ...inventories[inventoryCardIndex] };
        editedInventory.fieldsData = [...inventoryFieldsData];
        inventories.splice(inventoryCardIndex, 1, editedInventory);
        dispatch({
            type: actions.EDIT_INVENTORY,
            payload: inventories || []
        });
    }
}

const addInventoryType = () => {
    return (dispatch, getState) => {
        const existingInventoryTypes = getState().inventory.inventoryTypes;
        const inventoryTypes = existingInventoryTypes ? [...existingInventoryTypes] : [];
        const inventoryTypeCardTemplate = utils.getInventoryTypeCardTemplate();
        inventoryTypes.push(inventoryTypeCardTemplate);
        dispatch({
            type: actions.ADD_INVENTORY_TYPE,
            payload: inventoryTypes || []
        });
    }
}

const removeInventoryType = (inventoryTypeIndex) => {
    return (dispatch, getState) => {
        const existingInventoryTypes = getState().inventory.inventoryTypes;
        const inventoryTypes = existingInventoryTypes ? [...existingInventoryTypes] : [];
        const inventoryType = inventoryTypes[inventoryTypeIndex];
        inventoryTypes.splice(inventoryTypeIndex, 1);

        // remove associated inventories
        const existingInventories = getState().inventory.inventories;
        const filteredInventories = existingInventories.filter((existingInventory) => !(existingInventory.inventoryTypeId === inventoryType.id && existingInventory.type === inventoryType.type));
        dispatch({
            type: actions.REMOVE_INVENTORY_TYPE,
            payload: inventoryTypes || [],
            inventories: filteredInventories
        });
    }
}

const editInventoryType = (inventoryTypeIndex, inventoryType) => {
    return (dispatch, getState) => {
        const existingInventoryTypes = getState().inventory.inventoryTypes;
        const inventoryTypes = existingInventoryTypes ? [...existingInventoryTypes] : [];
        inventoryTypes.splice(inventoryTypeIndex, 1, inventoryType);
        dispatch({
            type: actions.EDIT_INVENTORY_TYPE,
            payload: inventoryTypes || []
        });
    }
}

const editInventoryTypeFieldsChange = (inventoryTypeIndex, inventoryType) => {
    return (dispatch, getState) => {
        dispatch(editInventoryType(inventoryTypeIndex, inventoryType));

        // update all the inventories with new key
        const existingInventories = getState().inventory.inventories;
        const inventories = existingInventories ? [...existingInventories] : [];
        const updatedInventories = inventories.map((inventory) => {
            if(inventory.inventoryTypeId === inventoryType.id && inventory.type === inventoryType.type) {
                inventory.titleKey = inventoryType.titleKey;
                inventory.fieldsData = inventory.fieldsData.map((field, index) => {
                    return {
                        ...field,
                        displayName: inventoryType.fields[index].fieldName
                    };
                });
            }
            return inventory;
        });
        dispatch({
            type: actions.EDIT_INVENTORY_OBJECT_TITLE,
            payload: updatedInventories
        })
    }
};

export default {
    addInventory,
    removeInventory,
    editInventory,
    addInventoryType,
    removeInventoryType,
    editInventoryType,
    editInventoryTypeFieldsChange
}