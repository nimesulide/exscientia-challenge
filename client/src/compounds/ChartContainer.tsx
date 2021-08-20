import React from 'react';
import { IconButton, makeStyles, Paper } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CompoundsStore from './store/CompoundsStore';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 500,
        position: 'relative'
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1
    }
}));

const ChartContainer: React.FC<{}> = ({ children }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <IconButton className={classes.closeButton} onClick={() => CompoundsStore.setChartConfig()}>
                <CloseIcon />
            </IconButton>
            {children}
        </Paper>
    );
};

export default ChartContainer;