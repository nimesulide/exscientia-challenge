import React from 'react';
import { view } from '@risingstack/react-easy-state';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Compound } from './types';
import CompoundsListItem from './CompoundsListItem';
import CompoundsStore from './store/CompoundsStore';
import CompoundsActionBar from './action-components/CompoundsActionBar';

interface CompoundListProps {
    compounds: Compound[];
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: `calc(90vh - ${theme.spacing(10)}px)`,
        display: 'flex',
        flexDirection: 'column'
    },
    tableContainer: {
        overflow: 'auto'
    }
}));

export default view(({ compounds }: CompoundListProps) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <CompoundsActionBar />
            <TableContainer className={classes.tableContainer}>
                <Table stickyHeader size={'small'}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Molecule</TableCell>
                            <TableCell>Molecular Formula</TableCell>
                            <TableCell>Molecular Weight</TableCell>
                            <TableCell>ALogP</TableCell>
                            <TableCell>Number of Rings</TableCell>
                            {CompoundsStore.calculationConfigs.map(config => (
                                <TableCell>
                                    {`${config.method} for 
                                    ${config.target ? config.target + ' | ': ''}
                                    ${config.operator ? config.operator + ' | ': ''}
                                    ${config.value ? config.value + ' | ': ''}
                                    ${config.unit}`}
                                </TableCell>
                            ))}
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
