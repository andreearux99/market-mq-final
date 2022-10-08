import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import SuccessBox from '../components/SuccessBox';
import { PRODUCT_UPDATE_RESET } from '../constants/actionTypes';
import { useNavigate, useParams } from 'react-router-dom';
import { detailsProduct, updateProduct } from '../actions/productAction';
import toast from 'react-hot-toast';

const editToastFail = () =>
  toast.error('Sorry! Product unsuccessfully edited!');
const editToastSuccess = () => toast.success('Product successfully edited!');

const EditProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id: productId } = params;
  const [name, setName] = useState('');
  const [mainCategory, setMainCategory] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [km, setKm] = useState('');
  const [carosery, setCarosery] = useState('');
  const [fuel, setFuel] = useState('');
  const [engine, setEngine] = useState('');
  const [horsePower, setHorsePower] = useState('');
  const [steeringWheel, setSteeringWheel] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [colour, setColour] = useState('');
  const [condition, setCondition] = useState('');
  const [furnished, setFurnished] = useState('');
  const [usefulSurface, setUsefulSurface] = useState('');
  const [groundType, setGroundType] = useState('');
  const [commerceType, setCommerceType] = useState('');
  const [rooms, setRooms] = useState('');

  const detailedProduct = useSelector((state) => state.detailedProduct);
  const { product } = detailedProduct;

  const updatedProduct = useSelector((state) => state.updatedProduct);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = updatedProduct;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successUpdate) {
      navigate('/');
      editToastSuccess();
    }
    if (errorUpdate) {
      editToastFail();
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      console.log(product.mainCategory);
      setMainCategory(product.mainCategory);
      setName(product.name);
      setCategory(product.category);
      setSubCategory(product.subCategory);
      setModel(product.model);
      setPrice(product.price);
      setYear(product.year);
      setKm(product.km);
      setCarosery(product.carosery);
      setFuel(product.fuel);
      setEngine(product.engine);
      setHorsePower(product.horsePower);
      setSteeringWheel(product.steeringWheel);
      setImage(product.image);
      setDescription(product.description);
      setColour(product.colour);
      setCondition(product.condition);
      setRooms(product.rooms);
      setGroundType(product.groundType);
      setCommerceType(product.commerceType);
      setUsefulSurface(product.usefulSurface);
      setFurnished(product.furnished);
    }
  }, [product, dispatch, productId, successUpdate, navigate, errorUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        category,
        subCategory,
        model,
        price,
        year,
        km,
        carosery,
        fuel,
        engine,
        horsePower,
        steeringWheel,
        image,
        description,
        colour,
        condition,
        furnished,
        groundType,
        commerceType,
        rooms,
        usefulSurface,
      })
    );
  };

  return (
    <div className="form-container">
      <div>
        <Helmet>
          <title>Update product</title>
        </Helmet>
        <h1 className="title">Update product</h1>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {successUpdate && (
          <SuccessBox variant="success">
            Successfully product updated!
          </SuccessBox>
        )}
        <Form onSubmit={handleSubmit} className="form-container">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              length="20"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subCategory">
            <Form.Label>SubCategory</Form.Label>
            <Form.Control
              name="subCategory"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              required
            />
          </Form.Group>
          {mainCategory === 'auto' ? (
            <>
              <Form.Group className="mb-3" controlid="model">
                <Form.Label>Model</Form.Label>
                <Form.Control
                  name="model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="year">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  name="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="km">
                <Form.Label>Km</Form.Label>
                <Form.Control
                  name="km"
                  value={km}
                  onChange={(e) => setKm(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="carosery">
                <Form.Label>Carosery</Form.Label>
                <Form.Control
                  name="carosery"
                  value={carosery}
                  onChange={(e) => setCarosery(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="fuel">
                <Form.Label>Fuel</Form.Label>
                <Form.Control
                  name="fuel"
                  value={fuel}
                  onChange={(e) => setFuel(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="engine">
                <Form.Label>Engine</Form.Label>
                <Form.Control
                  name="engine"
                  value={engine}
                  onChange={(e) => setEngine(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="horsePower">
                <Form.Label>Horse Power</Form.Label>
                <Form.Control
                  name="horsePower"
                  value={horsePower}
                  onChange={(e) => setHorsePower(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="steeringWheel">
                <Form.Label>Steering Wheel</Form.Label>
                <Form.Control
                  name="steeringWheel"
                  value={steeringWheel}
                  onChange={(e) => setSteeringWheel(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="colour">
                <Form.Label>Colour</Form.Label>
                <Form.Control
                  name="colour"
                  value={colour}
                  onChange={(e) => setColour(e.target.value)}
                  required
                />
              </Form.Group>
            </>
          ) : null}
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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

          <Form.Group className="mb-3" controlId="condition">
            <Form.Label>Condition</Form.Label>
            <Form.Control
              name="condition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
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

export default EditProduct;
