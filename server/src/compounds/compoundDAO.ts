import Compounds from "./compoundSchema";

const getAllCompoundsBasicData = () => Compounds.aggregate([
    {
        $project: {
            _id: false,
            compound_id: '$compound_id',
            smiles: '$smiles',
            molecular_weight: '$molecular_weight',
            molecular_formula: '$molecular_formula',
            num_rings: '$num_rings',
            image: '$image'
        }
    }
]);

const getDataForCompoundId = (compound_id: number) => Compounds.find({ compound_id });

export { getAllCompoundsBasicData, getDataForCompoundId };
