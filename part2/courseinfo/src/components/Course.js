const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  );
};

const Header = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

const Part=({name,exercises})=>{
return(
    <div>
      <p>{name} {exercises}</p>
    </div>
)
}

const Content=({parts})=>{
    return(
        <div>
            {parts.map((part)=>(
                <Part key={part.id} name={part.name} exercises={part.exercises}/>
            ))}
        </div>
    )
}

const Total=({parts})=>{
const total=parts.reduce((sum,part)=>{
    return sum+part.exercises
},0)
return <strong>total of {total} exercises</strong>
}

export default Course;
