import { useEffect, useState } from 'react';
import experiencesData from '../assets/data/experiences.json';

const useExperiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(experiencesData);
  }, []);

  return experiences;
};

export default useExperiences;
