import React from 'react';
import { connect } from 'react-redux';
import InventoryCardList from '../components/InventoryCardList';
import ButtonGroup from '../components/buttons/ButtonGroup'

class AllInventories extends React.Component { 

    getInventoryOptions = () => {
        return this.props.inventoryTypes.map((inventoryType) => {
            return {
                id: inventoryType.id,
                name: inventoryType.type
            }
        });
    }

    handleButtonItemClick= (option, index) => {
        //call action to add a card
    }

    render () {
        const { inventories } = this.props;
        const inventoryOptions = this.getInventoryOptions();
        return (
            <div>
                <div className="buttonGroup-container">
                    <ButtonGroup 
                        title="Add Item" 
                        handleButtonItemClick={this.handleButtonItemClick}
                        options={inventoryOptions} />
                </div>
                <InventoryCardList inventories={inventories} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    inventories: state.inventory.inventories,
    inventoryTypes: state.inventory.inventoryTypes
});

const mapDispatchToProps = {
};

const AllInventoriesWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(AllInventories);

export default AllInventoriesWrapper;