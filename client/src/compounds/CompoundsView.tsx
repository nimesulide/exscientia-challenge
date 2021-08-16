import React, { useEffect, useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Compound } from './types';
import { get } from '../utils/FetchWrappers';
import { generatePath, Routes } from '../utils/Routes';
import CompoundsList from './CompoundsList';

export default () => {
    const [compounds, setCompounds] = useState<Compound[]>([]);

    useEffect(() => {
        get(generatePath(Routes.GET_COMPOUND_LIST))
            .then(compounds => setCompounds(compounds))
            .catch(error => console.error(error));
    }, []);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {
                    Boolean(compounds.length) &&
                    <Paper>
                        <CompoundsList compounds={compounds} />
                    </Paper>
                }
            </Grid>
            <Grid item xs={12}>
            </Grid>
        </Grid>
    );
};
