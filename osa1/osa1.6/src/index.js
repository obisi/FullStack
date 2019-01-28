import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
const Stat = (props) => {
    return (
    <tr>
        <td>
            { props.name }
        </td>
        <td>
            { props.value }
        </td>
    </tr>
    )
}  

const Stats = (props) => {
    if (props.all === 0) {
      return (
        <div>
          ei yhtään palautetta annettu
        </div>
      )
    }
  
    return (
        <table>
          <tbody>
                  <Stat name = { 'hyvä ' } value = { props.good }/>
                  <Stat name = { 'neutraal ' } value = { props.neutral }/> 
                  <Stat name = { 'huono ' } value = { props.bad }/> 
                  <Stat name = { 'yhteensä ' } value = { props.all }/> 
                  <Stat name = { 'keskiarvo ' } value = { (props.good - props.bad) / props.all }/> 
                  <Stat name = { 'positiivisia ' } value = { (props.good / props.all) * 100 + ' %' }/>     
          </tbody>
        </table>
    )
  }
  


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
      setAll(all + 1)
      setGood(good + 1)
  }
  const handleNeutral = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  } 
  const handleBad = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }
  return (
    <div>
        <h3>anna palautetta</h3>
        <Button handleClick={handleGood} text='good' />
        <Button handleClick={handleNeutral} text='neutral' />
        <Button handleClick={handleBad} text='bad' />
        <h3>statistiikka</h3>
        < Stats all = {all} good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)