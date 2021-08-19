import React from 'react';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import { makeStyles } from '@material-ui/core';
import { Plottables } from '../types';
import CompoundsStore from '../CompoundsStore';
import { ScatterplotConfig } from '../../charts/Scatterplot';
import ActionButtonWithDialog from './ActionButtonWithDialog';

const useStyles = makeStyles((theme) => ({
    cardContent: {
        padding: theme.spacing(4)
    },
    sectionContainer: {
        marginBottom: theme.spacing(4),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    label: {
        display: 'inline',
        marginRight: theme.spacing(2)
    },
    select: {
        minWidth: 100
    },
    addButton: {
        width: '100%'
    }
}));

export default () => (
    <ActionButtonWithDialog
        title={'Charts'}
        icon={<BubbleChartIcon />}
        configs={{
            x: Object.values(Plottables), y: Object.values(Plottables), color: Object.values(Plottables)
        }}
        handleConfirm={(config) => CompoundsStore.setChartConfig(config as unknown as ScatterplotConfig)}
    />
);