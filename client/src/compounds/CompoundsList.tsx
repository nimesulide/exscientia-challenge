import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { Avatar, makeStyles } from '@material-ui/core';
import { Compound } from './types';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

interface CompoundListProps {
    compounds: Compound[];
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: 500,
        width: '100%'
    }
}));

export default view(({ compounds }: CompoundListProps) => {
    const classes = useStyles();
    const imageCellRenderer = (props: any) => <Avatar variant={'square'} src={`https://exscientia-challenge.s3.eu-central-1.amazonaws.com/${props.value}`} />;

    return (
        <div className={`ag-theme-material ${classes.root}`}>
            <AgGridReact
                rowData={compounds}
                suppressCellSelection
                frameworkComponents={{
                    imageCellRenderer
                }}
            >
                <AgGridColumn field={'image'} cellRenderer={'imageCellRenderer'} autoHeight></AgGridColumn>
                <AgGridColumn field={'molecular_formula'} sortable></AgGridColumn>
                <AgGridColumn field={'smiles'}></AgGridColumn>
                <AgGridColumn field={'molecular_weight'} sortable></AgGridColumn>
                <AgGridColumn field={'ALogP'} sortable></AgGridColumn>
                <AgGridColumn field={'num_rings'} sortable></AgGridColumn>
            </AgGridReact>
        </div>
    )
});
