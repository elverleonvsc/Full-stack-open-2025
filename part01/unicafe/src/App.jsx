import { useState } from 'react'


const Button = ({text,onClick}) => <button onClick={onClick}>{text}</button>
const SectionTitle = ({tittle}) => <h2>{tittle}</h2>

const Statistics = (props) => {

  return(
   
   <table>
    <tbody>
    <StatisticLine text = 'Good:' value={props.good}/>
    <StatisticLine text = 'Neutral:' value={props.neutral}/>
    <StatisticLine text = 'Bad:' value={props.bad}/>
    <StatisticLine text = 'All:' value={props.total}/>
    <StatisticLine text = 'Average:' value={props.average}/>
    <StatisticLine text = 'Positive:' value={props.positive}/>
    </tbody>
   </table>
   
    
  )
    
      
}
const StatisticLine = ({text,value}) => ( 
<tr>
  <td>{text}</td>
  <td>{value}</td>
</tr>
)




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const total = good + neutral + bad
  

const handleGood = ()=>{ 
  
  const feedGood = (good + 1)
  setGood (feedGood)

  
}
const handleNeutral = () => {
 
  const feedNeutral = (neutral + 1)
  setNeutral(feedNeutral) 
 
 
}
const handleBad = () => {
  
  const feedBad = (bad + 1)
  setBad (feedBad) 

}
const average = total === 0 ? 0: (good-bad)/total
const positive = total === 0 ? 0: (good/total) * 100


  return (
    <div>
      <SectionTitle tittle= 'Give Feedback'/>
      <Button text='Good' onClick={handleGood}  />
      <Button text='Neutral'onClick={handleNeutral} />
      <Button text='Bad'onClick={handleBad}/>
    
      {total === 0 ?(
        <p>No feedback given</p>
      ) : (
        <>
      <SectionTitle tittle= 'Statistics'/>
      <Statistics good= {good} neutral = {neutral} bad= {bad} total={total} average={average} positive={positive}/>
      </>
    
  )}
  </div>
  
  )
}
export default App