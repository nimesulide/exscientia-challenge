import { Compound, CalculatedFieldConfig } from "../types";

export const pairCompoundsWithFields = (
    compounds: Compound[],
    fields: Array<{ compound_id: number, value: number }>,
    config: CalculatedFieldConfig
): Compound[] => {
    return compounds.map(compound => {
        const newlyCalculatedField = fields.find(field => field.compound_id === compound.compound_id);
        const calculatedFields = Array.from(compound.calculatedFields ?? []).concat([newlyCalculatedField?.value]);
        return Object.assign({}, compound, { calculatedFields })
    })
};
