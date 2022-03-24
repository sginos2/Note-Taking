import './App.css';
import { Header, Form, TextArea, Button, Input, Card, Label, Search } from 'semantic-ui-react';
import { useState } from 'react';

function App() {

  const [note, setNote] = useState({tag: '' , text: ''});
  const {tag, text} = note;

  var existingNotes = JSON.parse(localStorage.getItem('notes'))

  //fix tags so it can be an array of tags, not just one tag
  const handleChangeTag = (e, { tag, value }) => {
    setNote({ ...note, tag: value, text: text });
  }

  const handleChangeText = (e, { text, value }) => {
    setNote({ ...note, tag: tag, text: value });
  }

  const handleSubmit = () => {
    if (existingNotes == null) {
      existingNotes = [];
    }
    existingNotes.push(note);
    localStorage.setItem('notes', JSON.stringify(existingNotes));
    setNote({ tag: '', text: '' });
  }

  return (
    <div className='App'>
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
          <Search placeholder='Search Notes...'/>
        </div>
        <div className='displayNotes'>
          {existingNotes !== null && (
              <Card.Group centered>
              {existingNotes.map((note) => (
                <Card>
                  <Card.Content>
                    <Card.Description>{note.text}</Card.Description>
                  </Card.Content>
                  {note.tag && (
                    <Card.Content>
                      <Label tag>{note.tag}</Label>
                    </Card.Content>
                  )}
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
