import '../App.css';
import { Header, Form, Input, TextArea, Button } from 'semantic-ui-react';

function CreateNote({ note, setNote }) {

  const {tag, text} = note;

  var existingNotes = JSON.parse(localStorage.getItem('notes'))

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
    <div>
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
  )
}

export default CreateNote;