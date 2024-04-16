import axios from 'axios';

const API_BASE_URL = 'https://api.postcodes.io';

export const getPostcodeDetails = async (postcode) => {
  const encodedPostcode = encodeURIComponent(postcode);
  
  try {
    const response = await axios.get(`${API_BASE_URL}/postcodes/${encodedPostcode}`);
    // Assume API returns 200 and has results for a successful call
    return response.data.result;
  }
  catch (error) {
    // If there's a response from the API, use its error message directly
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    } else {
      // The request was made but no response was received or other errors occurred
      throw new Error('Unable to retrieve postcode details');
    }
  }
};