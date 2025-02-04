import { useState } from 'react'
import { nanoid } from 'nanoid';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NotesList from './components/NotesList'

function App() {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is a note!",
    date: "15/04/2021"
    }
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className='container'>
      <NotesList
        notes={notes} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}/>
    </div>
  )
}

export default App
