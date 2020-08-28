
import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => {
  return (
    <div>
      <p>
  <h1>Half Stack application development</h1> 
      </p>
    </div>
  )
}
  const Content = (props) => {
  return(
    <div>
      <p> part1: {props.name} </p>
      <p> part2: {props.name1} </p>
      <p> part3: {props.name2} </p>
    </div>
)
}
const Total = (props) => {
  return (
    <div>
      <p>
         exercisese  total= {props.total}
      </p>
    </div>
  )
}
const App = () => {
  const exercises1 = 10
  const part1 = 'Fundamentals of React'
  const exercises2 = 7
  const part2= "Using props to pass data"
  const part3= 'State of a component'
  const exercises3 = 14
      return (
        <>
    <div>
      <Header/>
     <Content name ={part1}  name1={part2}  name2 = {part3}/>
      <Total total =  { exercises1 +  exercises2  +  exercises3    }/>
    </div>
    </>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))