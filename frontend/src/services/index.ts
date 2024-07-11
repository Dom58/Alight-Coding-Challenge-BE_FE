import { Item } from '@/types';
import axios from 'axios';

const baseAPI = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'
export const getSearchedProducts = async (keyword: string): Promise<Item[]> => {
    const url = `${baseAPI}/search?q=${keyword}`;
    const response = (await axios.get(url)).data;
    return response;
};
 