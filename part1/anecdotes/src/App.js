import React, { useState } from 'react'

const Heading = ({ title }) => <h2>{title}</h2>

const Anecdote = ({ note }) => <div>{note}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Counter = ({ count }) => (
  <div>
    has {count} votes
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  
  const addVote = (index) => () => {
    const copy = [...votes]
    copy[index] += 1
    setVotes(copy)
  }

  const randomize = (count) => () => {
    setSelected(Math.floor(Math.random() * count))
  }

  const maxVote = (arr) => {
    const max = Math.max.apply(Math, arr.map((i) => i))
    const maxIndex = arr.indexOf(max)
    return maxIndex
  }

  return (
    <div>
      <Heading title="Anecdote of the day" />
      <Anecdote note={anecdotes[selected]} />
      <Counter count={votes[selected]} />
      <div>
        <Button handleClick={addVote(selected)} text="vote" />
        <Button handleClick={randomize(anecdotes.length)} text="next ancedote" />
      </div>
      <Heading title="Anecdote with the most votes" />
      <Anecdote note={anecdotes[maxVote(votes)]} />
      <Counter count={votes[maxVote(votes)]} />
    </div>
  )
}

export default App