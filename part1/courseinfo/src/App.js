const Header = () => {
  const course = "Half Stack application development";

  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Part1 = () => {
  const part1 = "Fundamentals of React";
  const excercises1 = 10;

  return (
    <div>
      <p>
        {part1} = {excercises1}
      </p>
    </div>
  );
};

const Part2 = () => {
  const part2 = "Using props to pass data";
  const excercises2 = 7;

  return (
    <div>
      <p>
        {part2} = {excercises2}
      </p>
    </div>
  );
};

const Part3 = () => {
  const part3 = "State of a component";
  const excercises3 = 14;

  return (
    <div>
      <p>
        {part3} = {excercises3}
      </p>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  );
};

const Total = () => {
  const excercises1 = 10;
  const excercises2 = 7;
  const excercises3 = 14;

  return (
    <div>
      <p>
        Total number of exercises is {excercises1 + excercises2 + excercises3}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name:"Half Stack application development",
    parts:[
    {
      name:'Fundamentals of React',
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
      <h1>{course.name}</h1>
     <p>{course.parts[0].name} {course.parts[0].exercises}</p>
     <p>{course.parts[1].name} {course.parts[1].exercises}</p>
     <p>{course.parts[2].name} {course.parts[2].exercises}</p>
    </div>
  );
};

export default App;
