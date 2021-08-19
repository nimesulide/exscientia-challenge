import { Response, Request, NextFunction } from "express";
import { createResponse } from "../utils";
import { calculateFields, getAllCompoundsBasicData, getAllTargets, getDataForCompoundId } from "./compoundDAO";

const getCompoundsAction = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const compounds = await getAllCompoundsBasicData();
        createResponse(res)(compounds);
    } catch (error) {
        next(error);
    };
};

const getDataForCompoundIdAction = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const compound_id = Number(req.params.compound_id);
        const compoundData = await getDataForCompoundId(compound_id);
        createResponse(res)(compoundData);
    } catch (error) {
        next(error);
    };
};

const getAllTargetsAction = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const targets = await getAllTargets();
        createResponse(res)(targets);
    } catch (error) {
        next(error);
    };
};

const getCalculatedFieldsAction = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const config = req.body;
        if (!config?.method) {
            return next(new Error('Method must be given to calculate new field.'));
        }
        const calculatedFields = await calculateFields(config);
        createResponse(res)(calculatedFields);
    } catch (error) {
        next(error);
    };
};

export { getCompoundsAction, getDataForCompoundIdAction, getAllTargetsAction, getCalculatedFieldsAction };
