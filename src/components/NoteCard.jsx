import React from "react";
import { Button, Card } from "react-bootstrap";

const NoteCard = (props) => {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Text>
            {props.Text}
          </Card.Text>
          <Button variant="primary">Edit</Button>
          <Button variant="primary">Delete</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{props.Date}</Card.Footer>
      </Card>
    </div>
  );
};

export default NoteCard;
