import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import NoteModal from "./NoteModal";

const NoteList = () => {
  const state = useSelector((state) => {
    return state.noteReducer;
  });

  console.log(state);

  return (
    <Container>
      <Row>
        <Col md="12">
          <h1>Note List</h1>

          {state.notes.map((note) => {
            return (
              <div key={note.id}>
                <NoteModal note={note} />
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default NoteList;
