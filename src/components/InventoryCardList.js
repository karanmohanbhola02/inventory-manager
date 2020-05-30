import React from 'react';
import Grid from '@material-ui/core/Grid';
import InventoryCard from './InventoryCard';

const InventoryCardList  = ({ inventories }) => {
    return (
        <Grid className={'inventoryCardList-container'} container spacing={3}>
            {inventories.map((inventory) => {
                return (
                    <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                        <InventoryCard key={inventory.id} cardData={inventory} />
                    </Grid>
                ) 
            })}
        </Grid>
    );
};

export default InventoryCardList;