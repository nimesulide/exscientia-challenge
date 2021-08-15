import { Response, Request, NextFunction } from "express";
import { createResponse } from "../utils";
import { getAllCompoundsBasicData, getDataForCompoundId } from "./compoundDAO";

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

export { getCompoundsAction, getDataForCompoundIdAction };
