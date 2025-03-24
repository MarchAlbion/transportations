import axios from "axios";
import { Item } from "../types/types";

export const API_URL = `http://localhost:3001/items`;

export const getAllItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addItem = async (item: Item) => {
  try {
    const response = await axios.post(API_URL, item);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateItem = async (item: Item) => {
  try {
    const response = await axios.put(`${API_URL}/${item.id}`, item);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteItem = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getItemById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

