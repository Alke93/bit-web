import { ServiceResponse } from "../entities/service-response";

const url = 'https://localhost:44352/api/';
const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };

const concatParams = (params = []) => {
    const resultArray = [];
    params.forEach(item => {
        resultArray.push(`${item.key}=${item.value}`)
    });

    return resultArray.join('&');
}

export const getData = async (actionName = '', params = []) => {
    let link = url + actionName;
    if (params && params.length > 0) {
        link += '?' + concatParams(params);
    }

    const result = await fetch(link, { headers: headers });
    const data = await result.json();

    return new ServiceResponse(data.status, data.description, data.body);
}

export const saveData = async (actionName = '', method = '', data) => {
    const link = url + actionName;
    if (method == 'POST') {
        data.status = 3;
    } else {
        data.status = 2;
    }
    
    const result = await fetch(link, {
        headers: headers,
        method: method,
        body: JSON.stringify(data)
    });

    const dataResult = await result.json();

    return new ServiceResponse(dataResult.status, dataResult.description, dataResult.body);
}

export const deleteData = async (action = '', id) => {
    const link = `${url}${action}?id=${id}`;
    const result = await fetch(link, { method: 'DELETE', headers: headers });
    const data = await result.json();

    return new ServiceResponse(data.status, data.description, data.body);
}