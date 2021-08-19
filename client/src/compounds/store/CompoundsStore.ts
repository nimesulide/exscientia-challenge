import { store } from "@risingstack/react-easy-state";
import { ScatterplotConfig } from "../../charts/Scatterplot";
import { get, post } from "../../utils/FetchWrappers";
import { generatePath, Routes } from "../../utils/Routes";
import { CalculatedFieldConfig, Compound } from "../types";
import { pairCompoundsWithFields } from "./utils";

interface ICompoundsStore {
    compounds: Compound[];
    selectedCompoundId?: number;
    selectedCompoundDetails?: Compound;
    chartConfig: ScatterplotConfig | undefined;
    targetTypes: string[];
    calculationConfigs: CalculatedFieldConfig[];
    loadCompounds: () => void;
    selectCompound: (compound_id: number) => void;
    loadAssayResults: (compound_id: number) => void;
    setChartConfig: (config?: ScatterplotConfig) => void;
    loadTargetTypes: () => void;
    addCalculatedFields: (config: CalculatedFieldConfig) => void;
}

const CompoundsStore = store<ICompoundsStore>({
    compounds: [],
    selectedCompoundId: undefined,
    selectedCompoundDetails: undefined,
    chartConfig: undefined,
    targetTypes: [],
    calculationConfigs: [],
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
    setChartConfig(config) {
        CompoundsStore.chartConfig = config;
    },
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
    }
});

export default CompoundsStore;
