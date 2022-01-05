import React from "react";
import Person from "./Person"

const Persons = ({ persons, handleDelete }) => (
    persons.map((person, index) =>
        <Person key={index} contact={person} handleDelete={handleDelete} />
    )
)

export default Persons