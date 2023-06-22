import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNote } from "../slices/noteSlice";
import { v4 as uuidv4 } from "uuid";

function NoteForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: uuidv4(),
      title: title,
      date: date,
      notes: notes,
    };

    console.log(newNote);

    dispatch(addNote(newNote));

    setTitle("");
    setDate("");
    setNotes("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type=""
            placeholder="Type note title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>
        <label>
          Date <br />
          <input
            type="date"
            placeholder="Enter"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </label>
        <br /><br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Note Text</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Type something..."
            rows={3}
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
}

export default NoteForm;
