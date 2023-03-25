import NotesList from "./Components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";
import Search from "./Components/Search";
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

  const [searchText, setSearchText] = useState("");

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

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
