import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
import InventoryManagement from './containers/InventoryManagement';
import InventoryType from './containers/InventoryType';
import AllInventories from './containers/AllInventories';
import { inventoryFilters as inventoryFiltersConstants } from './constants';
import history from './utils/history';

import './App.css';
class App extends React.Component {
    state = {
        isDrawerOpened: false
    };

    handleDrawerState = () => {
        this.setState({
            isDrawerOpened: !this.state.isDrawerOpened
        })
    }

    getInventoryFilters = () => {
        const inventoryFilters = [inventoryFiltersConstants.ALL];
        inventoryFilters.push(...this.props.inventoryTypes);
        inventoryFilters.push(inventoryFiltersConstants.MANAGE_TYPES)
        return inventoryFilters;
    }

    handleInventoryFilterClick = (filterType) => {
        return () => {

        }
    }

    render() {
        const inventoryFilters = this.getInventoryFilters();
        const { isDrawerOpened } = this.state;
        return (
            <div className="App">
                <AppBar
                    title={'Inventory Manager'}
                    handleDrawerState={this.handleDrawerState}
                    inventoryFilters={inventoryFilters}
                    handleInventoryFilterClick={this.handleInventoryFilterClick} />
                <Drawer
                    handleDrawerState={this.handleDrawerState}
                    isDrawerOpened={isDrawerOpened}
                    inventoryFilters={inventoryFilters}
                    handleInventoryFilterClick={this.handleInventoryFilterClick} />
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={AllInventories} />
                        <Route path="types" component={InventoryManagement} />
                        <Route path="type/:id" component={InventoryType} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    inventoryTypes: state.inventory.inventoryTypes
});

const mapDispatchToProps = {
};

const AppWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppWrapper;