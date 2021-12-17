import React from "react";

const Person = ({ contact }) => (
    <div>{contact.name} {contact.number}</div>
)

export default Person