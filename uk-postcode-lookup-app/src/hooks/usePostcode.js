import { useState } from 'react';
import { getPostcodeDetails } from '../services/postcodeService';

export const usePostcode = () => {
  const [postcode, setPostcode] = useState('');
  const [postcodeData, setPostcodeData] = useState(null);
  const [postcodeHistory, setPostcodeHistory] = useState([]);
  
  const fetchPostcodeDetails = async (postcodeArg = postcode) => {
    if (!postcodeArg) return;

    try {
      const data = await getPostcodeDetails(postcodeArg);
      setPostcodeData(data);
      addPostcodeToHistory(data.postcode);
      setPostcode('');
    } catch (error) {
      console.error('Error fetching postcode details:', error);
    }
  };

  const addPostcodeToHistory = (postcode) => {
    setPostcodeHistory((prevHistory) =>
     [postcode, ...prevHistory.filter((item) => item !== postcode)]
    );
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