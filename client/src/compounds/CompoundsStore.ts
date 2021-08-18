import { store } from "@risingstack/react-easy-state";
import { ScatterplotConfig } from "../charts/Scatterplot";
import { get } from "../utils/FetchWrappers";
import { generatePath, Routes } from "../utils/Routes";
import { Compound } from "./types";

interface ICompoundsStore {
    compounds: Compound[];
    selectedCompoundId?: number;
    selectedCompoundDetails?: Compound;
    loadCompounds: () => void;
    selectCompound: (compound_id: number) => void;
    loadAssayResults: (compound_id: number) => void;
    chartConfig: ScatterplotConfig | undefined;
    setChartConfig: (config: ScatterplotConfig | undefined) => void;
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
    }
});

export default CompoundsStore;
