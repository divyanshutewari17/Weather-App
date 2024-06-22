import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 1.25rem;
`;

const Input = styled.input`
  width: 25rem;
  padding: 0.625rem 1.25rem;
  font-size: 1.125rem;
  border: 0.063rem solid #dfe1e5;
  border-radius: 1.5rem 0 0 1.5rem;
  box-shadow: 0 0.063rem 0.375rem rgba(32, 33, 36, 0.28);
  outline: none;
  transition: box-shadow 0.2s ease-in-out;

  &:focus {
    box-shadow: 0 0.063rem 0.375rem rgba(32, 33, 36, 0.42);
  }
`;

const Button = styled.button`
  padding: 0 1.25rem;
  font-size: 1.125rem;
  border: 0.063rem solid #dfe1e5;
  border-left: none;
  border-radius: 0 1.5rem 1.5rem 0;
  background-color: #f8f9fa;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    background-color: #f1f3f4;
  }

  &:focus {
    box-shadow: 0 0.063rem 0.375rem rgba(32, 33, 36, 0.42);
    outline: none;
  }
`;

const Search = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search for a city"
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default Search;
