import { ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Typography, makeStyles } from "@material-ui/core";
import { Compound } from "./types";

interface CompoundsListItemProps {
    compound: Compound;
    handleListItemSelect?: (compound_id: number) => void;
    selected?: boolean;
}

const useStyles = makeStyles((theme) => ({
    avatar: {
        height: '6rem',
        width: '6rem',
        marginRight: theme.spacing(1)
    },
    selected: {
        backgroundColor: theme.palette.grey[300]
    }
}));

export default ({ compound, handleListItemSelect, selected }: CompoundsListItemProps) => {
    const classes = useStyles();

    return (
        <>
            <ListItem
                button
                key={compound.compound_id}
                onClick={() => handleListItemSelect ? handleListItemSelect(compound.compound_id) : null}
                className={selected ? classes.selected : undefined}
            >
                <ListItemAvatar>
                    <Avatar
                        className={classes.avatar}
                        variant={'square'}
                        src={`https://exscientia-challenge.s3.eu-central-1.amazonaws.com/${compound.image}`}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={compound.molecular_formula}
                    secondary={
                        <>
                            <Typography>
                                SMILES: {compound.smiles}
                            </Typography>
                            <Typography>
                                Molecular Weight: {compound.molecular_weight}
                            </Typography>
                            <Typography>
                                ALogP: {compound.ALogP}
                            </Typography>
                            <Typography>
                                Number of Rings: {compound.num_rings}
                            </Typography>
                        </>
                    }
                />
            </ListItem>
            <Divider />
        </>
    );
};
