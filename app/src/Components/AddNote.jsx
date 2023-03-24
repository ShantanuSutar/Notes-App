import React from "react";
import { useState } from "react";

const AddNote = () => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to a dd a note"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>200 Remaining</small>
        <button className="save">Save</button>
      </div>
    </div>
  );
};

export default AddNote;
