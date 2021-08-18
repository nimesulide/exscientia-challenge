import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Compound } from './types';
import CompoundsListItem from './CompoundsListItem';
import CompoundsStore from './CompoundsStore';

interface CompoundListProps {
    compounds: Compound[];
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: `calc(90vh - ${theme.spacing(10)}px)`
    },
    tableContainer: {
        height: '100%',
        overflow: 'auto'
    }
}));

export default view(({ compounds }: CompoundListProps) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.tableContainer}>
                <Table size={'small'}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Molecule</TableCell>
                            <TableCell>Molecular Formula</TableCell>
                            <TableCell>Molecular Weight</TableCell>
                            <TableCell>ALogP</TableCell>
                            <TableCell>Number of Rings</TableCell>
                            <TableCell>SMILES</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            compounds.map(compound => (
                                <CompoundsListItem
                                    key={compound.compound_id}
                                    compound={compound}
                                    handleRowSelect={(compound_id) => CompoundsStore.selectCompound(compound_id)}
                                    selected={CompoundsStore.selectedCompoundId === compound.compound_id}
                                />
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
});
