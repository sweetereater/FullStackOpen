import { useState } from 'react'

const Statistics = ({ good, neutral, bad, all, average, positiveProcent }) => {

  if (all === 0) {
    return <p>No feedback given </p>
  }

  return (
    <>
      <p>Good - {good}</p>
      <p>Neutral - {neutral}</p>
      <p>Bad - {bad}</p>
      <p>All - {all}</p>
      <p>Average - {average}</p>
      <p>Positive procent - {positiveProcent}%</p>
    </>
  )
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
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

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