 import './App.css';
 import { Header, Form, TextArea, Button, Input, Search, Card, Label } from 'semantic-ui-react';
import { useState } from 'react';

function App() {

  const [note, setNote] = useState({tag: '' , text: ''});
  const {tag, text} = note;
  var existingNotes = JSON.parse(localStorage.getItem('notes'))

  //fix tags so it can be an array of tags, not just one tag
  const handleChangeTag = (e, { tag, value }) => {
    setNote({ tag: value, text: text });
  }

  const handleChangeText = (e, { text, value }) => {
    setNote({ tag: tag, text: value });
  }

  const handleSubmit = () => {
    const { tag, text } = note;
    setNote({ tag: tag, text: text });
    if (existingNotes == null) {
      existingNotes = [];
    }
    localStorage.setItem('note', JSON.stringify(note));
    existingNotes.push(note);
    localStorage.setItem('notes', JSON.stringify(existingNotes));
    setNote({ tag: '', text: '' });
  }

  return (
    <div className='App'>
      {/* 
        tag notes--there's a tag input in semantic ui, so save the tag with the note in local storage?
        search notes--simple search function that's not case-sensitive, uses the search term to search the strings of notes for words and returns the notes with those search terms. just search the note, not the tags
      */}
      <div className='createNote'>
        <Header as='h3'>New Note</Header>
        <Form onSubmit={handleSubmit} >
          <Form.Field>
            <Input
              icon='tags'
              iconPosition='left'
              placeholder='Enter tag'
              name='tag'
              value={tag}
              onChange={handleChangeTag}
            />
          </Form.Field>
          <Form.Field>
            <TextArea
              name='text'
              value={text}
              onChange={handleChangeText}
              rows={7} 
              placeholder='Take note...'
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
      <div className='existingNotes'>
        <div className='searchNotes'>
          <Search placeholder='Search Notes'/>
        </div>
        <div className='displayNotes'>
          {existingNotes !== null && (
              <Card.Group centered>
              {existingNotes.map((note) => (
                <Card>
                  <Card.Content>
                    <Card.Description>{note.text}</Card.Description>
                  </Card.Content>
                  <Card.Content>
                    <Label tag>{note.tag}</Label>
                  </Card.Content>
                </Card>
              ))}
              </Card.Group>
          )}
        </div>
      </div>
      
    </div>
  );
}

export default App;
