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
    },
    row: {
        '&:hover': {
            backgroundColor: theme.palette.action.hover
        }
    }
}));

export default ({ compound, handleRowSelect, selected }: CompoundsListItemProps) => {
    const classes = useStyles();

    return (
        <TableRow className={classes.row} selected={selected} onClick={() => handleRowSelect ? handleRowSelect(compound.compound_id) : null}>
            <TableCell>
                <Avatar className={classes.image} variant={'square'} src={`https://exscientia-challenge.s3.eu-central-1.amazonaws.com/${compound.image}`} />
            </TableCell>
            <TableCell>{compound.molecular_formula}</TableCell>
            <TableCell>{compound.molecular_weight}</TableCell>
            <TableCell>{compound.ALogP}</TableCell>
            <TableCell>{compound.num_rings}</TableCell>
            {
                compound.calculatedFields?.map(field => (
                    <TableCell>{field}</TableCell> 
                ))
            }
            <TableCell>{compound.smiles}</TableCell>
            
        </TableRow>
    );
};
