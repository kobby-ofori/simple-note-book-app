import React, { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { editNote, deleteNote } from "../slices/noteSlice";
import { useDispatch } from "react-redux";

const NoteModal = (props) => {
  const { note } = props;
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const [title, setTitle] = useState(note.title);
  const [notes, setNotes] = useState(note.notes);
  const [date, setDate] = useState(note.date);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = () => {
    handleModal();

    // console.log(note);

    const newNote = {
      id: note.id,
      title: title,
      notes: notes,
      date: date,
    };

    dispatch(editNote({ id: note.id, newNote: newNote }));

    // console.log(newNote);
  };

  const handleDelete=()=>{
    dispatch(deleteNote(note.id))
  }

  return (
    <div>
      <Modal show={showModal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type=""
                placeholder="Enter Title"
                value={title}
                onChange={handleTitleChange}
              />
            </Form.Group>
            <input
              type="date"
              placeholder="Enter"
              value={date}
              onChange={handleDateChange}
            />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Note Text</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Text"
                value={notes}
                onChange={handleNotesChange}
              />
            </Form.Group>

            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>

          {/* <form>
            <label>Title</label>
            <input
              placeholder="Enter Title"
              value={title}
              onChange={handleTitleChange}
            />

            <label>Notes</label>
            <input
              placeholder="Enter Text"
              value={notes}
              onChange={handleNotesChange}
            />
            <label>Date</label>
            <input
              placeholder="Enter"
              value={date}
              onChange={handleDateChange}
            />
          </form> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <h1>{note.title}</h1>
      <h3>{note.notes}</h3> */}

      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.notes}</Card.Text>

          <Button onClick={handleModal}>Edit</Button>
          <Button onClick={handleDelete} variant="danger">Delete</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{note.date}</Card.Footer>
      </Card>
    </div>
  );
};

export default NoteModal;
