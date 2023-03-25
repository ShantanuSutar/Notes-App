import NotesList from "./Components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/07/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "24/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "5/09/2021",
    },
    {
      id: nanoid(),
      text: "This is my fourth note!",
      date: "10/11/2021",
    },
    {
      id: nanoid(),
      text: "This is my fifth note!",
      date: "1/8/2022",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
}

export default App;
