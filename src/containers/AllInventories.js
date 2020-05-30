import React from 'react';
import { connect } from 'react-redux';
import InventoryCardList from '../components/InventoryCardList';
import ButtonGroup from '../components/buttons/ButtonGroup';
import { inventory } from '../store/actions';

class AllInventories extends React.Component { 

    getInventoryOptions = () => {
        return this.props.inventoryTypes.map((inventoryType) => {
            return {
                id: inventoryType.id,
                name: inventoryType.type
            }
        });
    }

    handleButtonItemClick= (option) => {
        //call action to add a card
        this.props.addInventory(option);
    }

    render () {
        const { inventories, removeInventory } = this.props;
        const inventoryOptions = this.getInventoryOptions();
        return (
            <div>
                <div className="buttonGroup-container">
                    <ButtonGroup 
                        title="Add Item" 
                        handleButtonItemClick={this.handleButtonItemClick}
                        options={inventoryOptions} />
                </div>
                <InventoryCardList inventories={inventories} removeInventory={removeInventory} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    inventories: state.inventory.inventories,
    inventoryTypes: state.inventory.inventoryTypes
});

const mapDispatchToProps = {
    addInventory: inventory.addInventory,
    removeInventory: inventory.removeInventory
};

const AllInventoriesWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(AllInventories);

export default AllInventoriesWrapper;