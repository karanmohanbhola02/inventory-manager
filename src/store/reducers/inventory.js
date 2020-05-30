import actions from '../constants';
import { inventories, inventoryTypes } from '../../constants';

const initialState = {
    inventories,
    inventoryTypes
};

const inventory = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_INVENTORY:
            return {
                ...state,
                inventories: action.payload
            }
        case actions.REMOVE_INVENTORY:
            return {
                ...state,
                inventories: action.payload
            }
        case actions.EDIT_INVENTORY:
            return {
                ...state,
                inventories: action.payload
            }
        default:
            return state;
    }
};

export default inventory;