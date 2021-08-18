import { makeStyles, Card, CardHeader, CardContent } from "@material-ui/core";
import AssayResultTable from "./AssayResultTable";
import { Compound } from "./types";

interface CompoundDetailsProps {
    compoundDetails?: Compound;
}

const useStyles = makeStyles((theme) => ({

}));

export default ({ compoundDetails }: CompoundDetailsProps) => {
    const classes = useStyles();

    return (
        <Card>
            <CardHeader title={'Compound Details'} />
            <CardContent>
                <AssayResultTable assay_results={compoundDetails?.assay_results ?? []} />
            </CardContent>
        </Card>
    );
};
