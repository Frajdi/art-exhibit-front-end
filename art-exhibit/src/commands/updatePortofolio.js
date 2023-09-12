import { useState } from 'react';
import axios from 'axios';

const useUpdatePortofolio = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updatePortofolio = async (postData, id, accessToken) => {
    setIsLoading(true);
    try {
      const response = await axios.put(`http://localhost:8080/portfolio/update/${id}`, postData, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Include the token in the Authorization header
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

  return { data, error, isLoading, updatePortofolio };
};

export default useUpdatePortofolio
