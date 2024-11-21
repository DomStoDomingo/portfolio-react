import React from "react";
import "../styles/Contact.css";

const Contact = ({ contact }) => {
    return(
        <div className="glass contact-item flex justify-center items-center p-2">
            <img src={contact.image} alt={contact.name} className="contact-image w-full h-auto"/>
        </div>
    );
}

export default Contact;