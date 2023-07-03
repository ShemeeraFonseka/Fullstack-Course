const PersonForm = ({
    addPerson,
    newName,
    newNumber,
    handleNameChange,
    handleNumberChange,
  }) => {
    return (
      <div>
        <form onSubmit={addPerson}>
          name: <input value={newName} onChange={handleNameChange} />
          <br />
          <br />
          number: <input value={newNumber} onChange={handleNumberChange} />
          <br />
          <br />
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default PersonForm;
  