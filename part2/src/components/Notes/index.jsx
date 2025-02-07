import { useState } from "react";

import Note from "./Note";
import { notes } from './data';

const NotesView = () => {
  const [notesList, setNotesList] = useState(notes);
  const [newNoteText, setNewNoteText] = useState('');

  const handleNewNoteTextChange = (e) => {
    setNewNoteText(e.target.value)
  }

  const handleAddNote = (e) => {
    e.preventDefault();
    const newNote = {
      content: newNoteText,
      important: Math.random() < 0.5,
      id: String(notes.length + 1)
    }
    
    setNotesList(notesList.concat(newNote))
    setNewNoteText('')
  }

  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={handleAddNote}>
        <input value={newNoteText} onChange={handleNewNoteTextChange} />
        <button type="submit">Save</button>
      </form>
      <ul>
        {notesList.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default NotesView;