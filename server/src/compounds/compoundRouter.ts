import express from "express";
import { getAllTargetsAction, getCalculatedFieldsAction, getCompoundsAction, getDataForCompoundIdAction } from "./compoundController";

const compoundRouter = express.Router();

compoundRouter.route('/')
    .get(getCompoundsAction);

compoundRouter.route('/details/:compound_id')
    .get(getDataForCompoundIdAction);

compoundRouter.route('/targets')
    .get(getAllTargetsAction);

compoundRouter.route('/calculate-fields')
    .get(getCalculatedFieldsAction);

export default compoundRouter;
