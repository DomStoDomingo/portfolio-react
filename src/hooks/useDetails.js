import { useEffect, useState } from 'react';
import detailsData from '../assets/data/details.json';

const useDetails = () => {
  const [details, setDetails] = useState([]);
  
  useEffect(() => {
    setDetails(detailsData); // Directly set the state with imported data
  }, []);

  return details;
};

export default useDetails;
