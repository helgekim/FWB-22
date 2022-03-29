function Header(course) {
    return(
      <div>
      <h1>{course.name}</h1>
      </div>
    )
}


function Total(course) {
  return(
    <div>
      Number of exercises {course.exercises}
    </div>
  )
}

function Content(course) {
  return(
    <div>
    <p>
      {course.part1} {course.exercises1}
    </p>
    <p>
      {course.part2} {course.exercises2}
    </p>
    <p>
      {course.part3} {course.exercises3}
    </p>
    </div>
  )
}


function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total exercises={exercises1 + exercises2 + exercises3}/>
    </div>
  );
}

export default App;
