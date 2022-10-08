import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const infoSearch = () =>
  toast(
    <div>
      <span className="info-icon">
        <i className="fas fa-info-circle"></i>
      </span>{' '}
      Type something in the search box!
    </div>
  );

export default function AutoSearchBox(props) {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (name === '') {
      infoSearch();
    } else {
      navigate(`/filters/name/${name}`);
    }
  };

  return (
    <Form className="inputSearch" onSubmit={submitHandler}>
      <InputGroup>
        <FormControl
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="search product..."
          aria-label="Search Product"
          aria-describedby="button-search"
        ></FormControl>
        <button className="button-search" type="submit" >
          <i className="fas fa-search"></i>
        </button>
      </InputGroup>
    </Form>
  );
}
