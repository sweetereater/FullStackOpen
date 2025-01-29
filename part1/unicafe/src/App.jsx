import { useState } from 'react'

const Statistics = ({ good, neutral, bad, all, average, positiveProcent }) => {

  if (all === 0) {
    return <p>No feedback given </p>
  }

  return (
    <table>
      <tbody>
        <StatisticsLine text="Good" value={good}/>
        <StatisticsLine text="Neutral" value={neutral} />
        <StatisticsLine text="Bad" value={bad} />
        <StatisticsLine text="All" value={all} />
        <StatisticsLine text="Average" value={average} />
        <StatisticsLine text="Positive procent" value={positiveProcent} />
      </tbody>
    </table>
  )
}

const StatisticsLine = ({ text, value }) => {
  return <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
}

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  const allFeedback = good + neutral + bad;
  const average = (good * 1 + bad * -1) / allFeedback;
  const positive = (good / allFeedback) * 100

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />

      <h1>Statistics</h1>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={allFeedback} 
        average={average} 
        positiveProcent={positive}
      />
    </div>
  )
}

export default App