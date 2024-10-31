import React from 'react';
import { Card } from 'react-bootstrap';

function StudentCard({ student }) {
  return (
    <Card>
      <Card.Img variant="top" src={student.image} alt={`${student.name}'s portrait`} />
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>
          <strong>Age:</strong> {student.age}
        </Card.Text>
        <Card.Text>
          <strong>Course:</strong> {student.course}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StudentCard;
