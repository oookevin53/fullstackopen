import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part name={props.part1} exercise={props.ex1} />
      <Part name={props.part2} exercise={props.ex2} />
      <Part name={props.part3} exercise={props.ex3} />
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.exercise}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises {props.total}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
  <>
    <Header course={course} />
    <Content part1={part1} ex1={exercises1} part2={part2} ex2={exercises2} part3={part3} ex3={exercises3} />
    <Total total={exercises1 + exercises2 + exercises3} />
  </>
  )
}

export default App