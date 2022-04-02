import {useState} from 'react';

function App() {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [anecdote, setAnecdote] = useState(getRandomInt(anecdotes.length));

  function change() {
    return setAnecdote(getRandomInt(anecdotes.length));
  }

  const emptyVotesArray = Array(anecdotes.length).fill(0);
  const [votes, setVote] = useState(emptyVotesArray);

  function vote() {
    const temporaryArray = [].concat(votes);
    temporaryArray[anecdote] += 1;
    return setVote(temporaryArray);
  }

  const [bestAnecdote, setBestAnecdote] = useState(votes.findIndex(Math.max.apply(null, votes)));

  function refreshbestAnecdote() {
    return setBestAnecdote(votes.findIndex(Math.max.apply(null, votes)));
  }
  return (
    <div>
    <header>
      <h1> Anecdotes </h1>
      <p>  Helge Kim for MOOC.fi</p>
    </header>
    <main>
      <h2> Anecdote </h2>
      <p> {anecdotes[anecdote]} </p>
      <p> this anecdote has {votes[anecdote]} votes </p>
      <button onClick={() => change()}>next anecdote</button>
      <button onClick={() => vote()}>vote</button>
    </main>
    <div>
    <h2> Anecdote with the most votes </h2>
    <p> {anecdotes[bestAnecdote]} </p>
    <p> this anecdote has {votes[bestAnecdote]} votes </p>
    <button onClick={() => refreshbestAnecdote()}>Refresh</button>
    </div>
    </div>
  );
}

export default App;
