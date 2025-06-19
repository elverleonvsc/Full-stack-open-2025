
const Header = ({course}) =>{
  return <h2>{course.name}</h2>
}

const Content = ({parts}) =>{
    return (
    <div>
     {parts.map((part) => (
         <Part 
         key={part.id}
         name = {part.name}
         exercises = {part.exercises}
         />
        ))}
      </div>
    )
  }

const Part = ({name,exercises}) =>{
    return <p>{name} {exercises}</p>
  }

  
const Total = ({parts}) => {
const sumEx = parts.reduce ((sum, part) => sum + part.exercises,0 )
      
    return (
      <div>
       <h2>Total of {sumEx} exercises </h2>
      </div>
    )
  }

const Course = ({courses}) => {
return (
    <>
    {courses.map( course => (

    <div key={course.id} >
    <Header course={course}/>
    <Content parts= {course.parts}/>
    <Total parts = {course.parts}/>
    </div>
    ))}
    </>
    
)

    
}

export default Course
