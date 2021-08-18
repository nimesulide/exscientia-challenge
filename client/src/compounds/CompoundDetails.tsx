import { Card, CardHeader, CardContent } from "@material-ui/core";
import AssayResultTable from "./AssayResultTable";
import { Compound } from "./types";

interface CompoundDetailsProps {
    compoundDetails?: Compound;
}

export default ({ compoundDetails }: CompoundDetailsProps) => {
    return (
        <Card>
            <CardHeader title={'Compound Details'} />
            <CardContent>
                <AssayResultTable assay_results={compoundDetails?.assay_results ?? []} />
            </CardContent>
        </Card>
    );
};
