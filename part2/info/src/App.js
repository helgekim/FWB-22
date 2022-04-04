import Course from './components/Course';

function App({courses}) {
  return courses.map(course => <Course id={course.id} course={course}/>)
}

export default App;
