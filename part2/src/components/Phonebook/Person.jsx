const Person = ({ personData, deletePerson, togglePersonImportance }) => {
  const { id, name, number, importance } = personData;

  const buttonText = importance ? 'make unimportant' : 'make important';

  return (
    <div key={name}>
      {importance && <b>VIP</b>}
      {'  '}
      {name} - {number}
      <button onClick={() => togglePersonImportance(id)}>{buttonText}</button>
      <button onClick={() => deletePerson(id)}>Delete</button>
    </div>
  )
}

export default Person;