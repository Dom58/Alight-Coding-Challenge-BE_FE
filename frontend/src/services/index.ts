import { Item } from '@/types';
import axios from 'axios';

export const getSearchedProducts = async (keyword: string): Promise<Item[]> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/search?q=${keyword}`;
    const response = (await axios.get(url)).data;
    return response;
};
 