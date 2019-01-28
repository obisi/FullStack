import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )
const largestIndex = (array) => {
    let counter = 1;
    let max = 0;
  
    for(counter; counter < array.length; counter++){
      if(array[max] < array[counter]){
          max = counter;
      }
    }
    return max;
  }

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
  
  const randomNumber = () => {
      setSelected(Math.floor(Math.random()*6))
  }
  const vote = ( selected ) => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
        <h3>Anecdote of the day</h3>
      {props.anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <Button handleClick={() => vote(selected) } text='vote' />
      <Button handleClick={randomNumber} text='next anecdote' />
      <h3>Anecdote with the most votes</h3>
      { props.anecdotes[largestIndex(points)]}
      <p>has {Math.max(...points)} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)