import { Response } from 'express';

export const createResponse = (response: Response) => (json: any) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.json(json);
};
