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

const calculateFields = (config: {
    target?: string,
    result?: string,
    operator?: string,
    unit?: string,
    method: 'avg' | 'min' | 'max'
}) => Compounds.aggregate([
    {
        '$addFields': {
            'assay_results_filtered': {
                '$filter': {
                    'input': '$assay_results',
                    'as': 'result',
                    'cond': {
                        '$and': [
                            config.target ? { '$eq': ['$$result.target', config.target] } : true,
                            config.result ? { '$eq': ['$$result.result', config.result] } : true,
                            config.operator ? { '$eq': ['$$result.operator', config.operator] } : true,
                            config.unit ? { '$eq': ['$$result.unit', config.unit] } : true,
                        ]
                    }
                }
            }
        }
    }, {
        '$project': {
            'compound_id': '$compound_id',
            'value': {
                [`$${config.method}`]: '$assay_results_filtered.value'
            }
        }
    }
]);

export { getAllCompoundsBasicData, getDataForCompoundId, getAllTargets, calculateFields };
