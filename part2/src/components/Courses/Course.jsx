const Header = ({ title }) => {
  return (
    <h3>{title}</h3>
  )
}

const Part = (props) => {
  return (
    <p>{props.data.name} {props.data.exercises}</p>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      { parts.map(part => <Part key={part.name} data={part} />) }
    </>
  )
}

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((acc, part) => acc + part.exercises, 0)
  return (
    <p><strong>TOTAL Number of exercises {totalExercises}</strong></p>
  )
}

const Course = ({ course }) => {
  return <>
    <Header title={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
}

export default Course;