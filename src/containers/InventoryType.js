import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import InventoryCardList from '../components/inventory/InventoryCardList';
import { inventory } from '../store/actions';

class InventoryType extends React.Component {

    getFilteredInventory = () => {
        const { inventories, match } = this.props;
        const inventoryTypeId = match.params.id;
        return inventories.filter((inventory) => inventory.inventoryTypeId === inventoryTypeId);
    }

    handleButtonItemClick = () => {
        const inventoryTypeId = this.props.match.params.id;
        const inventoryType = this.props.inventoryTypes.find((inventoryType) => inventoryType.id === inventoryTypeId);
        if(inventoryType) {
            const option = {
                id: inventoryType.id,
                name: inventoryType.type
            };
            //call action to add a card
            this.props.addInventory(option);
        } 
    }

    render() {
        const { removeInventory, editInventory } = this.props;
        const filteredInventory = this.getFilteredInventory();
        return (
            <div>
                <div className="buttonGroup-container">
                <Button variant="contained" color="primary" onClick={this.handleButtonItemClick}>
                    Add Item
                </Button>
                </div>
                <InventoryCardList
                    inventories={filteredInventory}
                    editInventory={editInventory}
                    removeInventory={removeInventory} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    inventories: state.inventory.inventories,
    inventoryTypes: state.inventory.inventoryTypes
});

const mapDispatchToProps = {
    addInventory: inventory.addInventory,
    removeInventory: inventory.removeInventory,
    editInventory: inventory.editInventory
};

const InventoryTypeWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(InventoryType);

export default InventoryTypeWrapper;