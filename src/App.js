import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import InventoryManagement from './containers/InventoryManagement';
import InventoryType from './containers/InventoryType';
import AllInventories from './containers/AllInventories';
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
import NoMatch from './components/NoMatch';
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
        const inventoryFilters = [{
            id: inventoryFiltersConstants.ALL,
            type: inventoryFiltersConstants.ALL
        }];
        const inventoryTypes = this.props.inventoryTypes.map((inventory) => {
            return {
                id: inventory.id,
                type: inventory.type
            }
        });
        inventoryFilters.push(...inventoryTypes);
        inventoryFilters.push({
            id: inventoryFiltersConstants.MANAGE_TYPES,
            type: inventoryFiltersConstants.MANAGE_TYPES
        })
        return inventoryFilters;
    }

    handleInventoryFilterClick = (filterType, shouldCloseModal = false) => {
        return () => {
            const id = filterType.id;
            switch (id) {
                case inventoryFiltersConstants.ALL:
                    history.push('/');
                    break;
                case inventoryFiltersConstants.MANAGE_TYPES:
                    history.push('/types');
                    break;
                default: 
                    history.push(`/type/${filterType.id}`);
            }

            shouldCloseModal && this.handleDrawerState();
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
                <div className="app-container">
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={AllInventories} />
                            <Route path="/types" component={InventoryManagement} />
                            <Route path="/type/:id" component={InventoryType} />
                            <Route path="*" component={NoMatch} />
                        </Switch>
                    </Router>
                </div>
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