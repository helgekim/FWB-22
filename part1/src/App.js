function Header(course) {
    return(
      <div>
      <h1>{course.name}</h1>
      </div>
    )
}


function Total(course) {


    const totalParts = course.content.map(element => element.exercises)
                                     .reduce((prevNum, curNum) => prevNum + curNum)

  return(
    <div>
      Number of exercises {totalParts}
    </div>
  )
}

function Content(course) {

  const parts = course.content.map(element => {
    return(
      <Part key={element.exercises} part={element}/>
    )
  })

  return(
    <div>
      {parts}
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

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name}/>
      <Content content={course.parts}/>
      <Total content={course.parts}/>
    </div>
  );
}

export default App;
