import { useEffect, useState } from 'react';
import contactsData from '../assets/data/contacts.json';

const useContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactsData); // Directly set the state with imported data
  }, []);

  return contacts;
};

export default useContacts;
