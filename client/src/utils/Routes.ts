import { compile } from "path-to-regexp";

export enum Routes {
    GET_COMPOUND_LIST = '/api/compounds/',
    GET_COMPOUND_DETAILS = '/api/compounds/details/:compound_id',
    GET_TARGET_TYPES = '/api/compounds/targets',
    GET_CALCULATED_FIELDS = '/api/compounds/calculate-fields'
};

export const generatePath = (route: Routes, params?: { [key: string]: string | number }) => {
    const toPath = compile(route, {encode: encodeURIComponent});

    return toPath(params);
};
