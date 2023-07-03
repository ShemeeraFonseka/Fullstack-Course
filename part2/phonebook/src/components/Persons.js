const Persons = ({ persons,deletePerson }) => {
    return (
      <ul>
        {persons.map((person, id) => (
          <li key={id}>
            {person.name} {person.number}
<button onClick={()=>deletePerson(person.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Persons;
  