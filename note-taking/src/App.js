 import './App.css';
 import { Header, Form, TextArea, Button, Input, Search } from 'semantic-ui-react';
import { useState } from 'react';

function App() {

  const [note, setNote] = useState({tags: [], text: ''});
  const {tags, text} = note;

  const handleChange = (e, { name, value }) => {
    setNote({ [name]: value });
    console.log(note);
  }

  const handleSubmit = () => {
    const { tags, text } = note;
    setNote({ tags: tags, text: text });
    console.log(note);
  }

  return (
    <div className="App">
      {/* 
        take notes--text field with submit button, submit button saves contents of note to local storage, probably display notes below text input box 
        tag notes--there's a tag input in semantic ui, so save the tag with the note in local storage?
        search notes--simple search function that's not case-sensitive, uses the search term to search the strings of notes for words and returns the notes with those search terms

        FOR SAVING NOTES: Save the note as an object. Inside the object have an array of tags, then a string with the note contents.
        notes = [
          {
            tags: ['house', 'groceries', 'todo'],
            text: 'buy groceries, clean the house'
          },
          {
            tags: ['hotels', 'travel'],
            text: 'hilton: $125/night, marriott: $106/night'
          }
        ]

      */}
      <div className='title'>
        <Header as='h1'>Notes</Header>
      </div>
      <div className='searchNotes'>
        <Search placeholder='Search Notes'/>
      </div>
      <div className='createNote'>
        <Form onSubmit={handleSubmit} style={{ margin: 50 }}>
          <Form.Field>
            <Input
              icon='tags'
              iconPosition='left'
              placeholder='Enter tags'
              name='tags'
              value={tags}
              onChange={handleChange}
            />
            {/* <Button onClick={handleChange}>Add Tag</Button> */}
          </Form.Field>
          <Form.Field>
            <TextArea
              name='text'
              value={text}
              onChange={handleChange}
              rows={7} 
              placeholder="Take note..."
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
