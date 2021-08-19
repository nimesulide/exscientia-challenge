import React from 'react';
import { makeStyles, AppBar, Toolbar } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
import ChartsAction from './ChartsAction';
import CalculatedFieldsAction from './CalculatedFieldsAction';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.primary.light,
        boxShadow: 'none'
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position={'static'}>
            <Toolbar>
                <ChartsAction />
                <CalculatedFieldsAction />
            </Toolbar>
        </AppBar>
    );
};