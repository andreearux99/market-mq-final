import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import SuccessBox from '../components/SuccessBox';
import { ELECTRONIC_UPDATE_RESET } from '../constants/electronicActionTypes';
import { useNavigate, useParams } from 'react-router-dom';
import { detailsElectronic, updateElectronic } from '../actions/electronic';
import toast from 'react-hot-toast';

const editToastFail = () =>
  toast.error('Sorry! Electronic unsuccessfully edited!');
const editToastSuccess = () =>
  toast.success('Electronic successfully edited!');

const EditElectronic = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id: electronicId } = params;
  const [elName, setElName] = useState('');
  const [elCt, setElCt] = useState('');
  const [subCt, setSubCt] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [rez, setRez] = useState('');
  const [stat, setStat] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const detailedElectronic = useSelector((state) => state.detailedElectronic);
  const { electronic } = detailedElectronic;

  const updatedElectronic = useSelector((state) => state.updatedElectronic);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = updatedElectronic;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successUpdate) {
      navigate('/');
      editToastSuccess();
    }
    if (errorUpdate) {
      editToastFail();
    }
    if (!electronic || electronic._id !== electronicId || successUpdate) {
      dispatch({ type: ELECTRONIC_UPDATE_RESET });
      dispatch(detailsElectronic(electronicId));
    } else {
      setElName(electronic.elName);
      setElCt(electronic.elCt);
      setSubCt(electronic.subCt);
      setBrand(electronic.brand);
      setPrice(electronic.price);
      setRez(electronic.rez);
      setStat(electronic.stat);
      setImage(electronic.image);
      setDescription(electronic.description);
    }
  }, [electronic, dispatch, electronicId, successUpdate, navigate, errorUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateElectronic({
        _id: electronicId,
        elName,
        elCt,
        subCt,
        brand,
        price,
        rez,
        stat,
        image,
        description,
      })
    );
  };

  return (
    <div className="form-container">
      <div>
        <Helmet>
          <title>Update Electronic</title>
        </Helmet>
        <h1 className="title">Update Electronic</h1>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {successUpdate && (
          <SuccessBox variant="success">
            Successfully Electronic updated!
          </SuccessBox>
        )}
        <Form onSubmit={handleSubmit} className="form-container">
          <Form.Group className="mb-3" controlId="elName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              length="20"
              name="elName"
              value={elName}
              onChange={(e) => setElName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="elCt">
            <Form.Label>Category</Form.Label>
            <Form.Control
              name="elCt"
              value={elCt}
              onChange={(e) => setElCt(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlid="subCt">
            <Form.Label>Sub Category</Form.Label>
            <Form.Control
              name="subCt"
              value={subCt}
              onChange={(e) => setSubCt(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="rez">
            <Form.Label>Rez</Form.Label>
            <Form.Control
              name="rez"
              value={rez}
              onChange={(e) => setRez(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="stat">
            <Form.Label>Useful Surface</Form.Label>
            <Form.Control
              name="stat"
              value={stat}
              onChange={(e) => setStat(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Button size="large" color="secondary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditElectronic;
