import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import CompoundsView from './compounds/CompoundsView';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CompoundsView />
        </div>
    );
};
