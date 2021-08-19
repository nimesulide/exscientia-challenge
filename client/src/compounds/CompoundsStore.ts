import { store } from "@risingstack/react-easy-state";
import { ScatterplotConfig } from "../charts/Scatterplot";
import { get, post } from "../utils/FetchWrappers";
import { generatePath, Routes } from "../utils/Routes";
import { CalculatedFieldConfig, Compound } from "./types";

interface ICompoundsStore {
    compounds: Compound[];
    selectedCompoundId?: number;
    selectedCompoundDetails?: Compound;
    loadCompounds: () => void;
    selectCompound: (compound_id: number) => void;
    loadAssayResults: (compound_id: number) => void;
    chartConfig: ScatterplotConfig | undefined;
    setChartConfig: (config?: ScatterplotConfig) => void;
    targetTypes: string[];
    loadTargetTypes: () => void;
    addCalculatedFields: (config: CalculatedFieldConfig) => void;
    calculationConfigs: CalculatedFieldConfig[];
}

const CompoundsStore = store<ICompoundsStore>({
    compounds: [],
    selectedCompoundId: undefined,
    selectedCompoundDetails: undefined,
    loadCompounds() {
        get(generatePath(Routes.GET_COMPOUND_LIST))
            .then(compounds => CompoundsStore.compounds = compounds)
            .catch(error => console.error(error));
    },
    selectCompound(compound_id: number) {
        if (compound_id === CompoundsStore.selectedCompoundId) {
            CompoundsStore.selectedCompoundId = undefined;
            CompoundsStore.selectedCompoundDetails = undefined;
        } else {
            CompoundsStore.selectedCompoundId = compound_id;
        }
        CompoundsStore.loadAssayResults(compound_id);
    },
    loadAssayResults(compound_id: number) {
        get(generatePath(Routes.GET_COMPOUND_DETAILS, { compound_id }))
            .then(results => CompoundsStore.selectedCompoundDetails = results)
            .catch(error => console.error(error));
    },
    chartConfig: undefined,
    setChartConfig(config) {
        CompoundsStore.chartConfig = config;
    },
    targetTypes: [],
    loadTargetTypes() {
        get(generatePath(Routes.GET_TARGET_TYPES))
            .then(targets => CompoundsStore.targetTypes = targets)
            .catch(error => console.error(error));
    },
    addCalculatedFields(config) {
        post(generatePath(Routes.GET_CALCULATED_FIELDS), config)
            .then(fields => {
                CompoundsStore.compounds = pairCompoundsWithFields(CompoundsStore.compounds, fields, config);
                CompoundsStore.calculationConfigs = CompoundsStore.calculationConfigs.concat([config]);
            })
            .catch(error => console.error(error));
    },
    calculationConfigs: []
});

const pairCompoundsWithFields = (
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

export default CompoundsStore;
