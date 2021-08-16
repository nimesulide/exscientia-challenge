import React, { useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { view } from '@risingstack/react-easy-state';
import CompoundsList from './CompoundsList';
import CompoundsStore from './CompoundsStore';

export default view(() => {

    useEffect(() => {
        CompoundsStore.loadCompounds();
    }, []);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {
                    Boolean(CompoundsStore.compounds.length) &&
                    <Paper>
                        <CompoundsList compounds={CompoundsStore.compounds} />
                    </Paper>
                }
            </Grid>
            <Grid item xs={12}>
                {
                    Boolean(CompoundsStore.selectedCompoundId) &&
                    <Paper>
                        
                    </Paper>
                }
            </Grid>
        </Grid>
    );
});
