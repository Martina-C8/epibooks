// src/components/AllTheBooks.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';
import romance from '../Data/romance.json';

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setBooks(romance);
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Form>
        <Form.Group controlId="search">
          <Form.Label>Search for a book</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book title"
            value={search}
            onChange={handleSearch}
          />
        </Form.Group>
      </Form>
      <Row>
        {filteredBooks.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
