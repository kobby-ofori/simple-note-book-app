import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import NoteForm from "./components/NoteForm";
import "bootstrap/dist/css/bootstrap.min.css";
import NoteList from "./components/NoteList";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <NoteForm />
          </Col>

          <Col xs="12" md="6">
            <NoteList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
