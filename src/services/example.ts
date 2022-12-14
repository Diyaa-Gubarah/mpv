import axios from 'axios';

// Define the data type for the request body
type RequestData = {
    [key: string]: any;
};

const sendRequest = async (url: string, data: RequestData) => {
    try {
        // Make the GET request
        const response = await axios.get(url);
        console.log(response.data);

        // Make the POST request
        await axios.post(url, data);
    } catch (error) {
        console.error(error);
    }
};




const getRequest = async (url: string, data: any) => {
    try {
        // Make the GET request
        const response = await axios.get(url);
        console.log(response.data);

        // Make the POST request
        await axios.post(url, data);
    } catch (error) {
        console.error(error);
    }
};
