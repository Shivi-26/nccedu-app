import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';

function NoteApp() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {             
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      id: notes.length + 1,
      text: '',
    };
    setNotes([...notes, newNote]);
  };

  const updateNote = (id, text) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          text,
        };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  return (

    <div classs="first">
      <Header />
      <h2 class="bg-warning text-dark text-center">Keep Notes📕✍</h2>
      <div class="d-flex justify-content-center">
        <button type="button" class="mt-5 btn btn-warning btn-block" style={{ width: 700, height: 50 }} onClick={addNote}>Add Note+</button>
      </div>
      {notes.map((note) => (
        <Note
          class="row"
          key={note.id}
          note={note}
          updateNote={updateNote}
          deleteNote={deleteNote}
        />
      ))}
      <Footer/>
    </div>
  );
}
function Note({ note, updateNote, deleteNote }) {
  const handleChange = (e) => {
    updateNote(note.id, e.target.value);
  };

  const handleDelete = () => {
    deleteNote(note.id);
  };

  return (
    <div class="first">
      <div class="row">
        <textarea
          class="form-control mt-5 me-auto ms-auto shadow rounded"
          rows="3"
          placeholder="Write a note here"
          style={{height: 450, width: 400}}
          value={note.text} onChange={handleChange}
        />
      </div>
      <div class="d-flex justify-content-center">
        <button class=" btn btn-warning me-auto ms-auto mt-7 mb-5" style={{ width: 100, height: 50 }} onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default NoteApp;