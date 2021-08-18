import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 500
    }
}));

const ChartContainer: React.FC<{}> = ({children}) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            {children}
        </Paper>
    );
};

export default ChartContainer;