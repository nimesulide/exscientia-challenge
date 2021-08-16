import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { Avatar, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { Compound } from './types';
import CompoundsListItem from './CompoundsListItem';
import CompoundsStore from './CompoundsStore';

interface CompoundListProps {
    compounds: Compound[];
}

const useStyles = makeStyles((theme) => ({
    
}));

export default view(({ compounds }: CompoundListProps) => {
    const classes = useStyles();

    return (
        <Table size={'small'}>
            <TableHead>
                <TableRow>
                    <TableCell>Molecule</TableCell>
                    <TableCell>Molecular Formula</TableCell>
                    <TableCell>SMILES</TableCell>
                    <TableCell>Molecular Weight</TableCell>
                    <TableCell>ALogP</TableCell>
                    <TableCell>Number of Rings</TableCell>
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
    )
});
