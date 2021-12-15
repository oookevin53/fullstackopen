import React from 'react'

const Course = ({ course }) => {
  return (
    <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    </>
  )
}

const Header = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      <Part name={parts[0].name} exercise={parts[0].exercises} />
      <Part name={parts[1].name} exercise={parts[1].exercises} />
      <Part name={parts[2].name} exercise={parts[2].exercises} />
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

// const Total = (props) => {
//   return (
//     <>
//       <p>
//         Number of exercises {props['course']['parts'][0].exercises + props['course']['parts'][1].exercises + props['course']['parts'][2].exercises}
//       </p>
//     </>
//   )
// }

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App