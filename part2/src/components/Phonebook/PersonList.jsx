import Person from "./Person";

const PersonList = ({ persons, deletePerson, togglePersonImportance }) => {
  return (
    <div>
      {persons.map(person => (
        <Person 
          key={person.id} 
          personData={person} 
          deletePerson={deletePerson}
          togglePersonImportance={togglePersonImportance} 
        />
      ))}
    </div>
  )
}

export default PersonList;