import { useState } from 'react';
import axios from 'axios';

const useUpdateSettings = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateSettings = async (accessToken, requestBody) => {
    setIsLoading(true);
    if(requestBody.password.length < 8){
      delete requestBody.password
    }
    try {
      console.log('<<<<<<<<<>>>>>>>>>>>>',requestBody);
      const response = await axios.put('http://localhost:8080/artist/update', requestBody, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Include the token in the Authorization header
        },
      });
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.response.data.details);
      setData(null);
    }
    setIsLoading(false);
  };

  return { data, error, isLoading, updateSettings };
};

export default useUpdateSettings;
