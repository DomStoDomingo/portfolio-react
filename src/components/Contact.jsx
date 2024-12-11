import React from "react";
import "../styles/Contact.css";

// Function to copy text to clipboard
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(
    () => {
      alert(`Copied ${text} to clipboard!`);
    },
    (err) => {
      console.error("Failed to copy text: ", err);
    }
  );
};

const Contact = ({ contact }) => {
  // Function to copy the contact link when clicked
  const copyElementText = () => {
    copyToClipboard(contact.link); // Copy the contact link
  };

  return (
    <a
      href={contact.target === "_self" ? "" : contact.link}
      target={contact.target}
      rel="noreferrer"
      className="glass contact-item flex justify-center items-center p-2"
      onClick={copyElementText} // Trigger the copy function on click
    >
      <img
        src={contact.image}
        alt={contact.name}
        className="contact-image w-full h-auto"
      />
    </a>
  );
};

export default Contact;
