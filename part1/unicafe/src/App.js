import React, { useState } from 'react'

const Heading = ({ title }) => <><h2>{title}</h2></>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Stats = ({ good, neutral, bad, avg, positive }) => {
  if (good === 0 && neutral === 0 && bad ===0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {good + neutral + bad}</div>
      <div>average {avg}</div>
      <div>positive {positive}</div>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  const averageScore = (a, b, c) => (a + b * 0 + c * -1) / (a + b + c)
  const positivePercent = (a, b, c) => a / (a+b+c) * 100 + " %"

  return (
    <div>
      <Heading title="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Heading title="statistics" />
      <Stats 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        avg={averageScore(good, neutral, bad)} 
        positive={positivePercent(good, neutral, bad)}
      />
    </div>
  )
}

export default App