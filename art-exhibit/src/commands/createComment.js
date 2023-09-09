import { useState } from 'react';
import axios from 'axios';

const useCreateComment = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const createComment = async (postData, accessToken) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`http://localhost:8080/comment/create`, postData, {
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

  return { data, error, isLoading, createComment };
};

export default useCreateComment
