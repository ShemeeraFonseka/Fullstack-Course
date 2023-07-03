import './App.css';
import { useState } from 'react';

const Statistics = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Button=(props)=>{
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const total = good + neutral + bad;

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>handleGoodClick()} text="good"/>
      <Button handleClick={()=>handleNeutralClick()} text="neutral"/>
      <Button handleClick={()=>handleBadClick()} text="bad"/>

      {total === 0 && (
        <div>
          <h3>No feedback given</h3>
        </div>
      )}

      {total > 0 && (
        <table>
          <tbody>
          <tr>
          <th><h2>statistics</h2></th>
          </tr>
          <tr>
            <td><Statistics text="good"/></td>
            <td><Statistics value={good} /></td>
            </tr>
          <tr>
          <td><Statistics text="neutral" /></td>
            <td><Statistics value={neutral} /></td>
            </tr>
          <tr>
            <td><Statistics text="bad" /></td>
            <td><Statistics value={bad} /></td>
            </tr>
          <tr>
          <td><Statistics text="all" /></td>
            <td><Statistics value={total} /></td>
            </tr>
          <tr>
          <td><Statistics text="average"/></td> 
            <td><Statistics value={total / 3}/></td>
            </tr>
          <tr>
          <td><Statistics text="positive" /></td>
          <td><Statistics value={`${(good / total) * 100}%`}/></td>
            </tr>
            </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
