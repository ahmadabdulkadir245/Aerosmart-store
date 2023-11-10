import axios from 'axios';
import { Product } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    // Handle errors, e.g., log them or throw a custom error
    console.error('Error fetching product:', error);
    throw error;
  }
};

export default getProduct;
