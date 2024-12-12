import { useEffect, useState } from 'react';
import contactsData from '../assets/data/contacts.json';

const useContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  return contacts;
};

export default useContacts;
