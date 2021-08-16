import { makeStyles, Card, CardHeader } from "@material-ui/core";
import { AssayResult, Compound } from "./types";

interface CompoundDetailsProps {
    assayResults?: AssayResult[];
}

const useStyles = makeStyles((theme) => ({

}));

export default ({ assayResults }: CompoundDetailsProps) => {
    const classes = useStyles();

    return (
        <Card>
            <CardHeader title={'Assay Results'} />
        </Card>
    );
};
