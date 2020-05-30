import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './AppBar.css';

const ButtonAppBar = ({ title, handleDrawerState, inventoryFilters, handleInventoryFilterClick }) => {    
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={'menuButton'} color="inherit" aria-label="menu" onClick={handleDrawerState}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    {title}
                </Typography>
                <div className="inventoryTypes-container">
                    {inventoryFilters.map((inventoryFilter) => {
                        return (
                            <Link key={inventoryFilter.id} className={'inventoryType-link'} onClick={handleInventoryFilterClick(inventoryFilter)} color="inherit">
                                {inventoryFilter.type}
                            </Link>
                        )
                    })}
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default ButtonAppBar;