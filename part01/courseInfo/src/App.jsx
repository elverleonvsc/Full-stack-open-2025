
  const Header = (props) =>{
    console.log(props)
    return (
      <div>
      <p>{props.course.name}</p>
      </div>
      
      
    )
  }
  const Part = (props) =>{
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    )
  }

  const Content = (props) =>{
    return (
      <div>
        {props.parts.map((part) => (
          <Part  key= {part.name} name= {part.name} exercises={part.exercises}/>
        ))}
      </div>
    )
  }

  const Total = (props) => {
    const exercisesParts = props.parts;
    return (
      <div>
       <p>Number of exercises {exercisesParts[0].exercises + exercisesParts[1].exercises + exercisesParts[2].exercises}</p>
      </div>
    )
  }
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

export default App
