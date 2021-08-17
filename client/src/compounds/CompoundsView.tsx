import React, { useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { view } from '@risingstack/react-easy-state';
import CompoundsList from './CompoundsList';
import CompoundsStore from './CompoundsStore';
import CompoundDetails from './CompoundDetails';

export default view(() => {

    useEffect(() => {
        CompoundsStore.loadCompounds();
    }, []);

    return (
        <Grid container spacing={2}>
            <Grid item xs={CompoundsStore.selectedCompoundId ? 6 : 12}>
                {
                    Boolean(CompoundsStore.compounds.length) &&
                    <CompoundsList compounds={CompoundsStore.compounds} />
                }
            </Grid>
            <Grid item xs>
                {/* {
                    Boolean(CompoundsStore.selectedCompoundId) &&
                    <CompoundDetails />
                } */}
            </Grid>
        </Grid>
    );
});
