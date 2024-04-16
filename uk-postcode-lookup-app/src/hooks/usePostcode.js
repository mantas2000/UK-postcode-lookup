import { useState, useEffect } from 'react';
import { getPostcodeDetails } from '../services/postcodeService';

const loadHistory = () => {
  const savedHistory = localStorage.getItem('postcodeHistory');
  return savedHistory ? JSON.parse(savedHistory) : [];
};

export const usePostcode = () => {
  const [postcode, setPostcode] = useState('');
  const [postcodeData, setPostcodeData] = useState(null);
  const [postcodeHistory, setPostcodeHistory] = useState(loadHistory);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem('postcodeHistory', JSON.stringify(postcodeHistory));
  }, [postcodeHistory]);
  
  const fetchPostcodeDetails = async (postcodeArg = postcode) => {
    if (!postcodeArg) return;

    setError(null);
    setLoading(true);

    try {
      const data = await getPostcodeDetails(postcodeArg);
      setPostcodeData(data);
      addPostcodeToHistory(data.postcode);
      setPostcode('');
    } 
    catch (error) {
      setError(error.message);
      setPostcodeData(null);
    }
    finally {
      setLoading(false);
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
    error,
    loading,
    postcode,
    setPostcode,
    postcodeData,
    postcodeHistory,
    fetchPostcodeDetails,
    removePostcodeFromHistory,
  };
};