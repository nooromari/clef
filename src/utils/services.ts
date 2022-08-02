import axios from "axios";
import { API_URL } from "./constants";

export const getData = async (endpoint: string): Promise<any> => {
  const response = await axios.get(`${API_URL}/${endpoint}`);
  return response.data;
};

export const generalGet = async (url: string): Promise<any> => {
  const response = await axios.get(url);
  return response.data;
};
