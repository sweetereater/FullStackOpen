import { useState } from 'react'
import Filter from './Filter';
import PersonForm from './PersonForm';
import PersonList from './PersonList';

const PhoneBook = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '39-44-5323523' }
  ]);

  const [filter, setFilter] = useState('');
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const [newName, setNewName] = useState('');
  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  }

  const [newNumber, setNewNumber] = useState('');
  const handleNewNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  const handleAddNewNumber = (e) => {
    e.preventDefault();
    const doesPersonAlreadyExist = persons.find(person => person.name === newName);
    if (doesPersonAlreadyExist) {
      alert(`Sorry, but ${newName} is already in your phone book`)
    } else {
      setPersons(persons.concat({ name : newName, number: newNumber }));
      setNewName('');
      setNewNumber('');
    }
  }

  const visiblePersons = persons.filter(person => person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={handleFilterChange} />
      <PersonForm 
        onSubmit={handleAddNewNumber}
        newName={newName}
        handleNewNameChange={handleNewNameChange}
        newNumber={newNumber}
        handleNewNumberChange={handleNewNumberChange}
      />
      <h2>Numbers</h2>
      <PersonList persons={visiblePersons} />
    </div>
  )
}

export default PhoneBook;