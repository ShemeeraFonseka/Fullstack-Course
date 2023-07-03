import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import personService from "./services/persons";
import Deleted from "./components/Deleted";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const deletePerson = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    if (!personToDelete) return;

    const confirmMessage = `Delete '${personToDelete.name}' ?`;
    const confirmed = window.confirm(confirmMessage);

    if (confirmed) {
      personService.remove(id).then(() => {
        const updatedPersons = persons.filter((person) => person.id !== id);
        setPersons(updatedPersons);
      })
      .catch(error=>{
        setDeleteMessage(
          `Information of '${personToDelete.name}' was already removed from server`
        )
        setTimeout(() => {
          setDeleteMessage(null)
        }, 5000)
        setPersons(persons.filter(n=>n.id!==id))
      })
    }
  };

  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      const replaceMessage = `${newName} is already added to the phonebook. Replace the old number with a new one?`;
      const replaceConfirmed = window.confirm(replaceMessage);

      if (replaceConfirmed) {
        const updatedPerson = { ...existingPerson, number: newNumber };

        personService
          .update(updatedPerson.id, updatedPerson)
          .then((returnedPerson) => {
            const updatedPersons = persons.map((person) =>
              person.id === returnedPerson.id ? returnedPerson : person
            );
            setPersons(updatedPersons);
            setNewName("");
            setNewNumber("");

            setErrorMessage(`Number for ${newName} has been updated`);
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          })
          .catch((error) => {
            setErrorMessage(
              `Error updating number for ${newName}: ${error.response.data.error}`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          });
      }
    } else {
      const personObject = { name: newName, number: newNumber };

      personService
        .create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");

          setErrorMessage(`Added ${newName}`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setErrorMessage(`Error adding person: ${error.response.data.error}`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const filterByName = (event) => {
    const filterValue = event.target.value.toLowerCase();
    setFilter(filterValue);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage}/>
      <Deleted message={deleteMessage}/>
      <Filter filter={filter} filterByName={filterByName} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
