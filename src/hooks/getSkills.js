import { useEffect, useState } from 'react';
import skillsData from '../assets/data/skills.json';

const useSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const updatedSkills = skillsData.map(skill => {
      try {
        const image = require(`${skill.image}`).default;
        return { ...skill, image };
      } catch (error) {
        return skill; 
      }
    });

    setSkills(updatedSkills);
  }, []);

  return skills;
};

export default useSkills;
