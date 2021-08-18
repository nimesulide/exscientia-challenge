import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { view } from '@risingstack/react-easy-state';
import CompoundsList from './CompoundsList';
import CompoundsStore from './CompoundsStore';
import CompoundDetails from './CompoundDetails';
import CompoundsActionBar from './CompoundsActionBar';
import Scatterplot from '../charts/Scatterplot';
import ChartContainer from './ChartContainer';




export default view(() => {

    useEffect(() => {
        CompoundsStore.loadCompounds();
    }, []);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <CompoundsActionBar />
            </Grid>
            <Grid item xs={CompoundsStore.selectedCompoundId || CompoundsStore.chartConfig ? 6 : 12}>
                {
                    Boolean(CompoundsStore.compounds.length) &&
                    <CompoundsList compounds={CompoundsStore.compounds} />
                }
            </Grid>
            <Grid item xs={CompoundsStore.selectedCompoundId || CompoundsStore.chartConfig ? 6 : true}>
                <Grid container spacing={2}>
                    {
                        Boolean(CompoundsStore.selectedCompoundId && CompoundsStore.selectedCompoundDetails) &&
                        <Grid item xs={12}>
                            <CompoundDetails compoundDetails={CompoundsStore.selectedCompoundDetails} />
                        </Grid>
                    }
                    {
                        CompoundsStore.chartConfig &&
                        <Grid item xs={12}>
                            <ChartContainer>
                                <Scatterplot data={CompoundsStore.compounds} config={CompoundsStore.chartConfig} />
                            </ChartContainer>
                        </Grid>
                    }
                </Grid>
            </Grid>
        </Grid>
    );
});
