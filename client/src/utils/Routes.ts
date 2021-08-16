import { compile } from "path-to-regexp";

export enum Routes {
    GET_COMPOUND_LIST = '/api/compounds/',
    GET_COMPOUND_DETAILS = '/api/compounds/:compound_id'
};

export const generatePath = (route: Routes, params?: { [key: string]: string | number }) => {
    const toPath = compile(route, {encode: encodeURIComponent});

    return toPath(params);
};
