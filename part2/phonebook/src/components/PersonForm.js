import React from "react"

const PersonForm = ({ name, number, handleName, handleNum, submitForm}) => (
    <form onSubmit={submitForm}>
      <div>name: <input value={name} onChange={handleName}/></div>
      <div>number: <input value={number} onChange={handleNum}/></div>
      <div><button type="submit">add</button></div>
  </form>
)

export default PersonForm