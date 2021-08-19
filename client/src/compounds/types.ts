export interface Compound {
    /**
     * Unique identifier for a compound, this is the primary key.
     */
    compound_id: number;
    /**
     * String representation of the compound https://en.wikipedia.org/wiki/Simplified_molecular-input_line-entry_system.
     */
    smiles: string;
    /**
     * The weight of the compound, could be plotted on the X axis.
     */
    molecular_weight?: number;
    /**
     * Indicates if the compound will dissolve in water or not, could be plotted on the Y axis.
     */
    ALogP?: number;
    /**
     * A short string representation of the compound.
     */
    molecular_formula?: string;
    /**
     * A count of the rings in the compound, could be used to color a plot. https://en.wikipedia.org/wiki/Ring_(chemistry)
     */
    num_rings?: number;
    /**
     * Compounds are visualised as 2D graphs, path to a pre-calculated png image of the compound.
     */
    image?: string;
    /**
     * The assay results for the compound (could be shown as Kd = 19uM) https://en.wikipedia.org/wiki/Assay.
     */
    assay_results?: AssayResult[];
    /**
     * Calculated field, e.g. aggregated assay result.
     */
    calculatedFields?: Array<number | undefined>;
}

export interface AssayResult {
    /**
     * Unique identifier for an assay_result.
     */
    result_id?: number;
    /**
     * The long name of the biological target used in the assay.
     */
    target?: string;
    /**
     * The result type of the assay.
     */
    result?: keyof typeof AssayResultTypes;
    /**
     * The value operator.
     */
    operator?: keyof typeof AssayOperatorTypes;
    /**
     * The result value.
     */
    value?: number;
    /**
     * The result unit.
     */
    unit?: string;
}

export const AssayResultTypes = Object.freeze({
    IC50: 'IC50',
    Ki: 'Ki',
    Kd: 'Kd'
});

export const AssayOperatorTypes = Object.freeze({
    '=': '=',
    '>': '>',
    '<': '<',
    '<=': '<=',
    '>=': '>=',
    '~': '~',
    '*': '*'
});

export interface CalculatedFieldConfig extends AssayResult {
    method: AggregationMethods;
}

export enum AggregationMethods {
    AVERAGE = 'avg',
    MIN = 'min',
    MAX = 'max'
}

export enum Plottables {
    MOLECULAR_WEIGHT = 'molecular_weight',
    ALOGP = 'ALogP',
    NUM_RINGS = 'num_rings'
}
