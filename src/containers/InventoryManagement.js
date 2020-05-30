import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import InventoryCardList from '../components/inventory/InventoryCardList';
import InventoryTypeCard from '../components/inventory/InventoryTypeCard';
import { inventory } from '../store/actions';

class InventoryManagement extends React.Component {

    handleButtonItemClick = () => {

        //call action to add a inventory type card
        this.props.addInventoryType(null);
    }

    render() {
        const { inventoryTypes, ...others } = this.props;
        return (
            <div>
                <div className="buttongroup-container">
                    <Button variant="contained" color="primary" onClick={this.handleButtonItemClick}>
                        Add Item
                </Button>
                </div>
                <InventoryCardList>
                    {inventoryTypes.map((inventoryType, index) => {
                        return (
                            <InventoryTypeCard 
                                key={inventoryType.id}
                                inventoryType={inventoryType}
                                inventoryTypeIndex={index}
                                {...others} />
                        )
                    })}
                </InventoryCardList>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    inventoryTypes: state.inventory.inventoryTypes
});

const mapDispatchToProps = {
    addInventoryType: inventory.addInventoryType,
    removeInventoryType: inventory.removeInventoryType,
    editInventoryType: inventory.editInventoryType
};

const InventoryManagementWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(InventoryManagement);

export default InventoryManagementWrapper;