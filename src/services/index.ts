import axios from "axios";

// Define the data type for the request body
type RequestData = {
  [key: string]: any;
};

export async function getRequest<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export const postRequest = async (url: string, data: RequestData) => {
  const res = await axios.post(url, data);
  return res;
};
