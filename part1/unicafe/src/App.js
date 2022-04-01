import {useState} from 'react';

function Rate({setter, points}) {

  const upGood = () => setter({...points, good: points.good + 1});
  const upNeutral = () => setter({...points, neutral: points.neutral + 1});
  const upBad = () => setter({...points, bad: points.bad + 1});


  return(
    <div>
      <h1> give feedback </h1>
      <div>
        <button onClick={upGood}>good</button>
        <button onClick={upNeutral}>neutral</button>
        <button onClick={upBad}>bad</button>
      </div>
    </div>
  )
}

function ShowRates({points}) {

  const all = points.good + points.neutral + points.bad;
  const average = all / 3;
  const positive = (((points.good + points.neutral) - points.bad)  / all) * 100;

  if (all > 0)
  {
    return (
    <div>
      <h1>statistics</h1>
      <p> good: {points.good} </p>
      <p> neutral: {points.neutral} </p>
      <p> bad: {points.bad} </p>
      <p> all: {all}</p>
      <p> average: {average} </p>
      <p> positive: {positive} %</p>
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
      <ShowRates points={points}/>
    </div>
  );
}

export default App;
