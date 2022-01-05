import React from "react";

const Person = ({ contact, handleDelete }) => 
    <div>
        {contact.name} {contact.number}
        <button onClick={handleDelete(contact.id)}>
            delete
        </button>
    </div>

export default Person