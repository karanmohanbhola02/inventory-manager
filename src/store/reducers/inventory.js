import actions from '../constants';

const initialState = {
    inventoryTypes: null
};

const inventory = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_INVENTORY_TYPE:
            return {
                ...state,
                inventoryTypes: action.payload
            }
        default:
            return state;
    }
};

export default inventory;