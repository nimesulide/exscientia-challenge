import { Avatar, makeStyles, TableCell, TableRow } from "@material-ui/core";
import { Compound } from "./types";

interface CompoundsListItemProps {
    compound: Compound;
    handleRowSelect?: (compound_id: number) => void;
    selected?: boolean;
}

const useStyles = makeStyles((theme) => ({
    image: {
        height: 100,
        width: 100
    }
}));

export default ({ compound, handleRowSelect, selected }: CompoundsListItemProps) => {
    const classes = useStyles();

    return (
        <TableRow selected={selected} onClick={() => handleRowSelect ? handleRowSelect(compound.compound_id) : null}>
            <TableCell>
                <Avatar className={classes.image} variant={'square'} src={`https://exscientia-challenge.s3.eu-central-1.amazonaws.com/${compound.image}`} />
            </TableCell>
            <TableCell>{compound.molecular_formula}</TableCell>
            <TableCell>{compound.molecular_weight}</TableCell>
            <TableCell>{compound.ALogP}</TableCell>
            <TableCell>{compound.num_rings}</TableCell>
            <TableCell>{compound.smiles}</TableCell>
        </TableRow>
    );
};
