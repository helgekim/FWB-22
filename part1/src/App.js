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
    <Part part={course.part1}/>
    <Part part={course.part2}/>
    <Part part={course.part3}/>
    </div>
  )
}

function Part({part}) {
  return(
    <div>
    <p>
      {part.name} {part.exercises}
      </p>
    </div>
  )
}

function App() {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course}/>
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total exercises={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  );
}

export default App;
