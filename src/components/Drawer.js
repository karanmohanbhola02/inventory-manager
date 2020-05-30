import React from 'react';
import MaterialDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Drawer = ({ inventoryFilters, isDrawerOpened, handleDrawerState, handleInventoryFilterClick }) => {
    return (
        <MaterialDrawer anchor={'top'} open={isDrawerOpened} onClose={handleDrawerState}>
            <List component="nav" aria-label="mailbox folders">
                {inventoryFilters.map((inventoryFilter) => {
                    return (
                        <div key={inventoryFilter}>
                            <ListItem button onClick={handleInventoryFilterClick(inventoryFilter)}>
                                <ListItemText primary={inventoryFilter} />
                            </ListItem>
                            <Divider />
                        </div>
                    )
                })}
            </List>
        </MaterialDrawer>
    )
};

export default Drawer;