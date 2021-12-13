import React, { useState } from 'react'

const Heading = ({ title }) => <><h2>{title}</h2></>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Stats = ({ type, count }) => <div>{type} {count}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  const average = (a, b, c) => (a + b + c)/3
  const positivePercent = (a, b, c) => a/(a+b+c)

  return (
    <div>
      <Heading title="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Heading title="statistics" />
      <Stats type="good" count={good} />
      <Stats type="neutral" count={neutral} />
      <Stats type="bad" count={bad} />
      <Stats type="all" count={good + neutral + bad} />
      <Stats type="average" count={average(good, neutral, bad)} />
      <Stats type="positive" count={positivePercent(good, neutral, bad)} />
    </div>
  )
}

export default App