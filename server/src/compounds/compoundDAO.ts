import Compounds from "./compoundSchema";

const getAllCompoundsBasicData = () => Compounds.aggregate([
    {
        $project: {
            _id: false,
            compound_id: '$compound_id',
            molecular_formula: '$molecular_formula',
            smiles: '$smiles',
            image: '$image'
        }
    }
]);

const getDataForCompoundId = (compound_id: number) => Compounds.find({ compound_id });

export { getAllCompoundsBasicData, getDataForCompoundId };
