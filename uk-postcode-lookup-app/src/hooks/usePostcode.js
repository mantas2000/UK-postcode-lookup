import { useState } from 'react';
import { getPostcodeDetails } from '../services/postcodeService';

export const usePostcode = () => {
  const [postcode, setPostcode] = useState('');
  const [postcodeData, setPostcodeData] = useState(null);
  const [postcodeHistory, setPostcodeHistory] = useState([]);

  const fetchPostcodeDetails = async () => {
    try {
      const data = await getPostcodeDetails(postcode);
      setPostcodeData(data);
      setPostcodeHistory((prevHistory) => [...prevHistory, postcode]);
      setPostcode('');
    } catch (error) {
      console.error('Error fetching postcode details:', error);
    }
  };

  const removePostcodeFromHistory = (postcodeToRemove) => {
    setPostcodeHistory((prevHistory) =>
      prevHistory.filter((item) => item !== postcodeToRemove)
    );
  };

  return {
    postcode,
    setPostcode,
    postcodeData,
    postcodeHistory,
    fetchPostcodeDetails,
    removePostcodeFromHistory,
  };
};