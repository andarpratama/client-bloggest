// utils/api.ts
import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Replace with your API base URL
  timeout: 5000, // Adjust as needed
});

const makeRequest = async <T>(method: string, endpoint: string, data: any = null): Promise<T> => {
  try {
    const response = await api({
      method,
      url: endpoint,
      data,
    } as AxiosRequestConfig);
    return response.data as T;
  } catch (error) {
    throw error;
  }
};

export default makeRequest;
