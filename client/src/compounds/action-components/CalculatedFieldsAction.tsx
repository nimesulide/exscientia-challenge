import React from 'react';
import FunctionsIcon from '@material-ui/icons/Functions';
import { view } from '@risingstack/react-easy-state';
import { AggregationMethods, AssayOperatorTypes, AssayResultTypes, CalculatedFieldConfig } from '../types';
import CompoundsStore from '../CompoundsStore';
import ActionButtonWithDialog from './ActionButtonWithDialog';

export default view(() => (
    <ActionButtonWithDialog
        title={'Calculated Fields'}
        icon={<FunctionsIcon />}
        configs={{
            method: Object.values(AggregationMethods),
            target: CompoundsStore.targetTypes,
            result: Object.values(AssayResultTypes) as string[],
            operator: Object.values(AssayOperatorTypes) as string[],
            unit: ['nM']
        }}
        initialConfig={{
            method: AggregationMethods.AVERAGE,
            target: '',
            result: 'IC50',
            operator: '=',
            unit: 'nM'
        }}
        handleConfirm={(config) => CompoundsStore.addCalculatedFields(config as unknown as CalculatedFieldConfig)}
    />
));