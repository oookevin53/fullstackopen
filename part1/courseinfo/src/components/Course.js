import React from "react";

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

export default Course