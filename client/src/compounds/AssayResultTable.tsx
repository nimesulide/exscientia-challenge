import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { AssayResult } from './types';

interface AssayResultTableProps {
    assay_results: AssayResult[];
}

export default ({ assay_results }: AssayResultTableProps) => {
    console.log(assay_results)
    return (
        <TableContainer>
            <Table size={'small'}>
                <TableHead>
                    <TableRow>
                        <TableCell>Result ID</TableCell>
                        <TableCell>Target</TableCell>
                        <TableCell>Result</TableCell>
                        <TableCell>Operator</TableCell>
                        <TableCell>Value</TableCell>
                        <TableCell>Unit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        assay_results.map(assay_result => (
                            <TableRow>
                                <TableCell>{assay_result.result_id}</TableCell>
                                <TableCell>{assay_result.target}</TableCell>
                                <TableCell>{assay_result.result}</TableCell>
                                <TableCell>{assay_result.operator}</TableCell>
                                <TableCell>{assay_result.value}</TableCell>
                                <TableCell>{assay_result.unit}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};
