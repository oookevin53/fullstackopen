import React from 'react'

const Course = ({ course }) => {
  return (
    <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </>
  )
}

const Header = ({ name }) => {
  return (
    <>
      <h3>{name}</h3>
    </>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part =>
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
    </>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <>
      <p>{name} {exercises}</p>
    </>
  )
}

const Total = ({ parts }) => {
  const total = (acc, obj) => acc + obj.exercises

  return (
    <>
      <p>
        <strong>total of {parts.reduce(total, 0)} exercises</strong>
      </p>
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  console.log(courses)

  return (
    <>
      <h2>Web development cirriculum</h2>
      {courses.map(course =>
        <Course key={course.id} course={course}/>
    )}
    </>
  )
}

export default App