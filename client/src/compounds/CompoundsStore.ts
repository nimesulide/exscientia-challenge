import { store } from "@risingstack/react-easy-state";
import { get } from "../utils/FetchWrappers";
import { generatePath, Routes } from "../utils/Routes";
import { AssayResult, Compound } from "./types";

interface ICompoundsStore {
    compounds: Compound[];
    selectedCompoundId: null | number;
    assayResults: AssayResult[];
    loadCompounds: () => void;
    selectCompound: (compound_id: number) => void;
}

const CompoundsStore = store<ICompoundsStore>({
    compounds: [],
    selectedCompoundId: null,
    assayResults: [],
    loadCompounds() {
        get(generatePath(Routes.GET_COMPOUND_LIST))
            .then(compounds => CompoundsStore.compounds = compounds)
            .catch(error => console.error(error));
    },
    selectCompound(compound_id: number) {
        CompoundsStore.selectedCompoundId = compound_id;
    }
});

export default CompoundsStore;
