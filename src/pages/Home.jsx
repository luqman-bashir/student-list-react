import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StudentCard from '../components/studentCard.jsx';


function Home({ students }) {
  return (
    <Row className="g-6 p-4">
      {students.map((student) => (
        <Col md={3} key={student.id}>
          <StudentCard student={student} />
        </Col>
      ))}
    </Row>
  );
}

export default Home;
