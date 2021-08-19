const convertResponseToJson = (response: Response) => response.json();

const createRequest = (method: string, data: any): RequestInit => ({
    method: method,
    credentials: 'same-origin',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(data)
});

const post = async (url: RequestInfo, data: any) => {
    try {
        return await fetch(url, createRequest('POST', data)).then(convertResponseToJson);
    } catch (error) {
        console.log(error);
    }
};

const put = async (url: RequestInfo, data: any) => {
    try {
        return await fetch(url, createRequest('PUT', data)).then(convertResponseToJson);
    } catch (error) {
        console.log(error);
    }
};

const patch = async (url: RequestInfo, data: any) => {
    try {
        return await fetch(url, createRequest('PATCH', data)).then(convertResponseToJson);
    } catch (error) {
        console.log(error);
    }
};

const remove = async (url: RequestInfo, data: any) => {
    try {
        return await fetch(url, createRequest('DELETE', data)).then(convertResponseToJson);
    } catch (error) {
        console.log(error);
    }
};


const get = async (url: RequestInfo) => {
    try {
        return await fetch(url, { credentials: 'same-origin' }).then(convertResponseToJson);
    }
    catch (error) {
        console.log(error);
    }
};

export { post, get, put, patch, remove };
