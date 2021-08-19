import Compounds from "./compoundSchema";

const getAllCompoundsBasicData = () => Compounds.aggregate([
    {
        $project: {
            _id: false,
            compound_id: '$compound_id',
            smiles: '$smiles',
            molecular_weight: '$molecular_weight',
            ALogP: '$ALogP',
            molecular_formula: '$molecular_formula',
            num_rings: '$num_rings',
            image: '$image'
        }
    }
]);

const getDataForCompoundId = (compound_id: number) => Compounds.findOne({ compound_id });

const getAllTargets = async () => {
    const aggregationResult = await Compounds.aggregate([
        {
            '$unwind': {
                'path': '$assay_results',
                'preserveNullAndEmptyArrays': false
            }
        }, {
            '$group': {
                '_id': null,
                'targets': {
                    '$addToSet': '$assay_results.target'
                }
            }
        }
    ]);
    return aggregationResult[0].targets;
};

export { getAllCompoundsBasicData, getDataForCompoundId, getAllTargets };
