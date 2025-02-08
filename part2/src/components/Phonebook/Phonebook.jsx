import { useEffect, useState } from 'react'

import Filter from './Filter';
import PersonForm from './PersonForm';
import PersonList from './PersonList';
import { 
  changePersonImportance, 
  changePersonPhoneNumber,  
  createNewPerson, 
  deletePerson, 
  getPersons 
} from '../../service';

const PhoneBook = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getPersons()
      .then(response => setPersons(response.data))
  }, [])


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
    const personId = doesPersonAlreadyExist.id;

    if (doesPersonAlreadyExist) {
      if (newNumber === doesPersonAlreadyExist.number) {
        alert('Sorry, but it seems that this person already exists')
      } else {
        const changeNumberAnswer = confirm('Change this person phone number?');
        if (changeNumberAnswer) {
          changePersonPhoneNumber({
            id: personId,
            number: newNumber
          }).then(response => {
            setPersons(persons.map(person => person.id === personId  ? response.data : person))
          })
        }
      }
    } else {
      createNewPerson({ name: newName, number: newNumber })
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('');
          setNewNumber('');
        })
    }
  }

  const visiblePersons = persons.filter(person => person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))

  const togglePersonImportance = (id) => {
    const toggledPerson = persons.find(person => person.id === id);

    changePersonImportance({ 
      id, 
      data: {...toggledPerson, importance: !toggledPerson.importance }
    })
      .then(response => {
        setPersons(persons.map(person => person.id === id ? response.data : person))
      })
  }

  const handleDeletePerson = (id) => {
    deletePerson(id).then(() => {
      setPersons(persons.filter(person => person.id !== id))
    })
  }

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
      <PersonList persons={visiblePersons} deletePerson={handleDeletePerson} togglePersonImportance={togglePersonImportance} />
    </div>
  )
}

export default PhoneBook;