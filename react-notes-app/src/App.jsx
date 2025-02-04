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
  return (
    <div className='container'>
      <NotesList notes={notes}/>
    </div>
  )
}

export default App
