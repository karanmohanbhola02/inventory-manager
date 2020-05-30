import React from 'react';
import { connect } from 'react-redux';

class AllInventories extends React.Component { 
    render () {
        return (
            <div>
                All Inventories
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    inventoryTypes: state.inventory.inventoryTypes
});

const mapDispatchToProps = {
};

const AllInventoriesWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(AllInventories);

export default AllInventoriesWrapper;