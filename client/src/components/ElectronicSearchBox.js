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

export default function ElectronicSearchBox(props) {
  const [elName, setElName] = useState('');
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (elName === '') {
      infoSearch();
    } else {
      navigate(`/electronics/filters/elName/${elName}`);
    }
  };

  return (
    <Form className="inputSearch" onSubmit={submitHandler}>
      <InputGroup>
        <FormControl
          type="text"
          name="electrnicName"
          id="electronicName"
          onChange={(e) => setElName(e.target.value)}
          placeholder="search electronics..."
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
