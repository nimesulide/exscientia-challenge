import React from 'react';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import { Plottables } from '../types';
import CompoundsStore from '../CompoundsStore';
import { ScatterplotConfig } from '../../charts/Scatterplot';
import ActionButtonWithDialog from './ActionButtonWithDialog';

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