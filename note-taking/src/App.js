import './App.css';
import { useState } from 'react';
import CreateNote from './components/CreateNote';
import DisplayNote from './components/DisplayNote';

function App() {

  const [note, setNote] = useState({tag: '' , text: ''});

  return (
    <div className='App'>
      <div className='createNote'>
        <CreateNote note ={note} setNote={setNote}/>
      </div>
      <div className='existingNotes'>
        <DisplayNote/>
      </div>
    </div>
  );
}

export default App;
