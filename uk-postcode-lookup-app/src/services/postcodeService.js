import axios from 'axios';

const API_BASE_URL = 'https://api.postcodes.io';

export const getPostcodeDetails = async (postcode) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/postcodes/${postcode}`);
    return response.data.result;
  } 
  catch (error) {
    throw new Error('Failed to fetch postcode details');
  }
};