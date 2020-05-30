import React from 'react';
import { connect } from 'react-redux';

class InventoryType extends React.Component { 
    render () {
        return (
            <div>
                InventoryType
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    inventoryTypes: state.inventory.inventoryTypes
});

const mapDispatchToProps = {
};

const InventoryTypeWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(InventoryType);

export default InventoryTypeWrapper;