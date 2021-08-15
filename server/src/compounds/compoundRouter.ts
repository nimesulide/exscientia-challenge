import express from "express";
import { getCompoundsAction, getDataForCompoundIdAction } from "./compoundController";

const compoundRouter = express.Router();

compoundRouter.route('/')
    .get(getCompoundsAction);

compoundRouter.route('/:compound_id')
    .get(getDataForCompoundIdAction);

export default compoundRouter;
