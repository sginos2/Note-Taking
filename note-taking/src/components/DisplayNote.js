import '../App.css';
import { Search, Card, Label } from 'semantic-ui-react';

function DisplayNote() {

  var existingNotes = JSON.parse(localStorage.getItem('notes'));

  return (
    <div>
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
  )
}

export default DisplayNote;