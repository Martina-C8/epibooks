// src/components/MyFooter.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MyFooter.css';

const MyFooter = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center mia">
      <Container>
        <Row>
          <Col>&copy; 2024 MyApp, Inc.</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
