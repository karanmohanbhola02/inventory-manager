import React from 'react';
import Grid from '@material-ui/core/Grid';

const InventoryCardList  = ({ children }) => {
    return (
        <Grid className={'inventoryCardList-container'} container spacing={3}>
            {children}
        </Grid>
    );
};

export default InventoryCardList;