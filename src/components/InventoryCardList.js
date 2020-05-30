import React from 'react';
import Grid from '@material-ui/core/Grid';
import InventoryCard from './InventoryCard';

const InventoryCardList  = ({ inventories, removeInventory }) => {
    return (
        <Grid className={'inventoryCardList-container'} container spacing={3}>
            {inventories.map((inventory, index) => {
                return (
                    <Grid key={inventory.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
                        <InventoryCard cardIndex={index} cardData={inventory} removeInventory={removeInventory} />
                    </Grid>
                ) 
            })}
        </Grid>
    );
};

export default InventoryCardList;