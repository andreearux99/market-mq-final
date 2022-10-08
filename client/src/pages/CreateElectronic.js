import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createElectronic } from '../actions/electronic';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import SuccessBox from '../components/SuccessBox';
import { ELECTRONIC_CREATE_RESET } from '../constants/electronicActionTypes';
import toast from 'react-hot-toast';

const createToastSuccess = () =>
  toast.success('Electronic successfully created!');
const createToastFail = () =>
  toast.error('Sorry! Electronic unsuccessfully created!');

export default function CreateElectronic() {
  const navigate = useNavigate();
  const [electronicData, setElectronicData] = useState({
    elName:'',
    mainCategory:'',
    elCt:'',
    subCt:'',
    brand:'',
    price:'',
    rez:'',
    stat:'',
    image:'',
    description:'',
  });

  const dispatch = useDispatch();

  const createdElectronic = useSelector((state) => state.createdElectronic);

  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    electronics,
  } = createdElectronic;

  const clear = () => {
    setElectronicData({
        elName: '',
        mainCategory: '',
        elCt: '',
        subCt: '',
        brand: '',
        price: '',
        rez: '',
        stat: '',
        image: '',
        description: '',
    });
  };

  function handleChange(e) {
    setElectronicData({
      ...electronicData,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (electronics) {
      setElectronicData(electronics);
    }
    if (successCreate) {
      dispatch({ type: ELECTRONIC_CREATE_RESET });
      navigate('/');
      createToastSuccess();
    }
    if (errorCreate) {
      createToastFail();
    }
  }, [electronics, successCreate, errorCreate]);

  const handleSubmit = async (e) => {
    dispatch(createElectronic(electronicData));
    e.preventDefault();
    clear();
  };

  return (
    <div className="form-container">
      <Helmet>
        <title>Create Electronic</title>
      </Helmet>

      <h1 className="title">Create Electronic</h1>
      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {successCreate && (
        <SuccessBox variant="success">Successfully created!</SuccessBox>
      )}
      <Form onSubmit={handleSubmit} className="form-container">
        <Form.Group className="mb-3" controlid="elName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="elName"
            value={electronicData.elName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="mainCategory">
          <Form.Label>Main Category</Form.Label>
          <Form.Control
            name="mainCategory"
            value={electronicData.mainCategory}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="elCt">
          <Form.Label>Category</Form.Label>
          <Form.Control
            name="elCt"
            value={electronicData.elCt}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="subCt">
          <Form.Label>Subcategory</Form.Label>
          <Form.Control
            name="subCt"
            value={electronicData.subCt}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="brand">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            name="brand"
            value={electronicData.brand}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            value={electronicData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="rez">
          <Form.Label>Rezolution</Form.Label>
          <Form.Control
            name="rez"
            value={electronicData.rez}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="stat">
          <Form.Label>Status</Form.Label>
          <Form.Control
            name="stat"
            value={electronicData.stat}
            onChange={handleChange}
            required
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlid="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="image"
            value={electronicData.image}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            value={electronicData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button size="large" color="secondary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}
