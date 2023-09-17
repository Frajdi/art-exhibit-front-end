import { useState } from 'react';
import axios from 'axios';

const useAddToCollection = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const addToCollection = async (portfolioId, accessToken) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`http://localhost:8080/collectors/add/${portfolioId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`, 
        },
      });
      setData(response.data);
      setError(null);
    } catch (err) {
      if(err.response.data.details){
        setError(err.response.data.details);
      }else{
        setError(err.response.data.error)
      }
      setData(null);
    }
    setIsLoading(false);
  };

  return { data, error, isLoading, addToCollection };
};

export default useAddToCollection
