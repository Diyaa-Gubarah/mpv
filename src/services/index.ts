import axios from 'axios';

// Define the data type for the request body
type RequestData = {
    [key: string]: any;
};

export const getRequest = async (url: string,) => {
    try {
        // Make the GET request
        const response = await axios.get(url);

        return response.data
    } catch (error) {
        console.error(`getRequest :${error}`);

        return error
    }
};




export const postRequest = async (url: string, data: RequestData) => {
    try {

        // Make the POST request
        await axios.post(url, data);
    } catch (error) {
        console.error(error);
    }
};
