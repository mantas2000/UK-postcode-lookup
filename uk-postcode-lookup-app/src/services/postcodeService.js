import axios from 'axios';

const API_BASE_URL = 'https://api.postcodes.io/postcodes';

export const getPostcodeDetails = async (postcode) => {
  const encodedPostcode = encodeURIComponent(postcode);
  
  try {
    const response = await axios.get(`${API_BASE_URL}/${encodedPostcode}`);
    return response.data.result;
  } 
  catch (error) {
    throw new Error(error.response?.data?.error || 'Unable to retrieve postcode details.');
  }
};