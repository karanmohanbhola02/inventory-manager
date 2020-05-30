import React from 'react';
import { connect } from 'react-redux';

class InventoryManagement extends React.Component { 
    render () {
        return (
            <div>
                Inventory Management
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    inventoryTypes: state.inventory.inventoryTypes
});

const mapDispatchToProps = {
};

const InventoryManagementWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(InventoryManagement);

export default InventoryManagementWrapper;