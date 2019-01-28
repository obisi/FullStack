import React from 'react'

const Part = ({ part }) => {
    return (
        <ul>{part.name} {part.exercises}</ul>
    )
}

const Courses = ({ courses }) => {

    const rows = () => courses.map(course =>
        <Course 
          key={course.id}
          course={course}
        />
      )
    return (
        <div>
            {rows()}
        </div>
     
    )
}

const Course = ({ course }) => {

    const rows = () => course.parts.map(part =>
        <Part 
          key={part.id}
          part={part}
        />
      )
    return (
        <div>
            <Header course={course}/>
            {rows()}
            <Total course={course}/>
        </div>
     
    )
}

const Total = ({ course }) => {

    const total = course.parts.reduce( (s, p) => {
        return s + p.exercises
      }, 0)
    return (
        <p>
            yhteensä {total} tehtävää
        </p>
    )
}


const Header = ({ course }) => {
    return (
          <h1>
            {course.name}
          </h1>
      )
}

export default Courses

