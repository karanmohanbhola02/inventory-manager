import React from 'react';
import { connect } from 'react-redux';
import InventoryCardList from '../components/inventory/InventoryCardList';
import InventoryCard from '../components/inventory/InventoryCard';
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
        const { inventories, ...others } = this.props;
        const inventoryOptions = this.getInventoryOptions();
        return (
            <div>
                <div className="buttonGroup-container">
                    <ButtonGroup 
                        title="Add Item" 
                        handleButtonItemClick={this.handleButtonItemClick}
                        options={inventoryOptions} />
                </div>
                <InventoryCardList>
                    {inventories.map((inventory, index) => {
                        return (
                            <InventoryCard key={inventory.id} cardIndex={index} cardData={inventory} {...others} />
                        ) 
                    })}
                </InventoryCardList>
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
    removeInventory: inventory.removeInventory,
    editInventory: inventory.editInventory
};

const AllInventoriesWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(AllInventories);

export default AllInventoriesWrapper;