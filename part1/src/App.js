import React from 'react'

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10
  console.log(name)
  
  return (
    <div>
      <p>Greetings</p>
      <Hello name="Kevin" age={24+6} />
      <Hello name={name} age={age} />
    </div>
  )
}


export default App