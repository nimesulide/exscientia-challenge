import React from 'react';
import { IconButton, makeStyles, Paper } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CompoundsStore from './CompoundsStore';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 500,
        textAlign: 'right'
    }
}));

const ChartContainer: React.FC<{}> = ({ children }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <IconButton onClick={() => CompoundsStore.setChartConfig()}>
                <CloseIcon />
            </IconButton>
            {children}
        </Paper>
    );
};

export default ChartContainer;