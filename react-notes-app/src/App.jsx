import { useState } from 'react'
import { nanoid } from 'nanoid';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NotesList from './components/NotesList'
import SearchBar from './components/SearchBar'
import Header from './components/Header'

function App() {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is a note!",
    date: "15/04/2021"
    }
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

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
    <div className={`${darkMode  && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}/>
        <SearchBar handleSearchNote={setSearchText}/>
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}/>
      </div>
    </div>
  )
}

export default App
