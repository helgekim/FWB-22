import {useState} from 'react';

function Rate({setter, points}) {

  const upGood = () => setter({...points, good: points.good + 1});
  const upNeutral = () => setter({...points, neutral: points.neutral + 1});
  const upBad = () => setter({...points, bad: points.bad + 1});


  return(
    <div>
      <h1> give feedback </h1>
      <div>
      <Button event={upGood} text="good"/>
      <Button event={upNeutral} text="neutral"/>
      <Button event={upBad} text="bad"/>
      </div>
    </div>
  )
}

function Button(props) {
  return(
      <button onClick={props.event}>{props.text}</button>
  )
}

function Statistics({points}) {

  const all = points.good + points.neutral + points.bad;
  const average = all / 3;
  const positive = (((points.good + points.neutral) - points.bad)  / all) * 100;

  if (all > 0)
  {
    return (
    <div>
      <h1>statistics</h1>
      <div>
        <table>
        <StatisticLine text="good" point={points.good}/>
        <StatisticLine text="neutral" point={points.neutral}/>
        <StatisticLine text="bad" point={points.bad}/>
          <StatisticLine text="all" point={all}/>
          <StatisticLine text="average" point={average}/>
          <StatisticLine text="positive" point={positive}/>
          </table>

      </div>
    </div>
  )
}

return(
  <div>
  <h1> statistics </h1>
  <p> no feedback given </p>
  </div>
)
}


function StatisticLine(data) {
  return(
    <tr>
      <td>{data.text} </td>
      <td>{data.point}</td>
    </tr>
  )
}


function App() {

  const [points, setPoints] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0
    }
  )


    console.log(points);

  return (
    <div>
      <p> The application is in development </p>
      <Rate setter={setPoints} points={points}/>
      <Statistics points={points}/>
    </div>
  );
}

export default App;
