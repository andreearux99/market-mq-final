import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createProduct } from '../actions/productAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import SuccessBox from '../components/SuccessBox';
import { PRODUCT_CREATE_RESET } from '../constants/actionTypes';
import toast from 'react-hot-toast';
import { autoCategoryCreate, mainCategoryCreate } from '../utils';
import { BiChevronDown } from 'react-icons/bi';

const createToastSuccess = () =>
  toast.success('Translation successfully created!');
const createToastFail = () =>
  toast.error('Sorry! Translation unsuccessfully created!');

export default function CreateProducts() {
  const [mainArr, setMainArr] = useState([]);
  const [autoArr, setAutoArr] = useState([]);
  const [mainCategorySelect, setMainCategorySelect] = useState('');
  const [autoCategorySelect, setAutoCategorySelect] = useState('');
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: '',
    mainCategory: '',
    category: '',
    subCategory: '',
    model: '',
    price: '',
    year: '',
    km: '',
    carosery: '',
    fuel: '',
    engine: '',
    horsePower: '',
    steeringWheel: '',
    image: '',
    description: '',
    colour: '',
    condition: '',
  });

  const dispatch = useDispatch();

  const createdProduct = useSelector((state) => state.createdProduct);

  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    products,
  } = createdProduct;

  const clear = () => {
    setProductData({
      name: '',
      mainCategory: '',
      category: '',
      subCategory: '',
      model: '',
      price: '',
      year: '',
      km: '',
      carosery: '',
      fuel: '',
      engine: '',
      horsePower: '',
      steeringWheel: '',
      image: '',
      description: '',
      colour: '',
      condition: '',
    });
  };

  function handleChange(e) {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (products) {
      setProductData(products);
    }
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      navigate('/');
      createToastSuccess();
    }
    if (errorCreate) {
      createToastFail();
    }
  }, [products, successCreate, errorCreate]);

  const handleSubmit = async (e) => {
    dispatch(createProduct(productData));
    e.preventDefault();
    clear();
  };

  useEffect(() => {
    autoCategoryCreate.map((item) => {
      setAutoArr((oldArray) => [...oldArray, item]);
    });
    mainCategoryCreate.map((item) => {
      setMainArr((oldArray) => [...oldArray, item]);
    });
  }, []);
  console.log(autoCategorySelect);
  return (
    <div className="form-container">
      <Helmet>
        <title>Create Auto</title>
      </Helmet>

      <h1 className="title">Create Auto</h1>
      <section className="mainCategory">
        <label className="mb-1">Main category</label>
        <div className="dropdown" controlid="mainCategory">
          <button className="dropbtn">
            {''}
            <span>
              <BiChevronDown className="icon-style" />
            </span>
          </button>
          <div className="dropdown-content">
            {mainCategoryCreate.map((mc, index) => (
              <Link
                to={`/create/${mc}`}
                key={index}
                style={{ textDecoration: 'none' }}
              >
                {mc}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="subCategory">
        <label className="mb-1">
          What kind of auto product want to create?
        </label>
        <div className="dropdown" controlid="subCategory">
          <button className="dropbtn">
            {autoCategorySelect}
            <span>
              <BiChevronDown className="icon-style" />
            </span>
          </button>
          <div className="dropdown-content">
            {autoCategoryCreate.map((c, index) => (
              <div
                className="create-list-select"
                onClick={() => setAutoCategorySelect(c)}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>
      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {successCreate && (
        <SuccessBox variant="success">Successfully created!</SuccessBox>
      )}
      <Form onSubmit={handleSubmit} className="form-container">
        <Form.Group className="mb-3" controlid="mainCategory">
          <Form.Label>Main Category</Form.Label>
          <Form.Control
            name="mainCategory"
            value={productData.mainCategory}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            name="category"
            value={productData.category}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoComplete="off"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {autoCategorySelect != 'boats' && autoCategorySelect != 'autoUtility' && (
          <>
            <Form.Group className="mb-3" controlid="subCategory">
              <Form.Label>Sub Category</Form.Label>
              <Form.Control
                name="subCategory"
                value={productData.subCategory}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </>
        )}
        {autoCategorySelect === 'cars' && (
          <>
            <Form.Group className="mb-3" controlid="model">
              <Form.Label>Model</Form.Label>
              <Form.Control
                name="model"
                value={productData.model}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="carosery">
              <Form.Label>Carosery</Form.Label>
              <Form.Control
                name="carosery"
                value={productData.carosery}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="steeringWheel">
              <Form.Label>steeringWheel</Form.Label>
              <Form.Control
                name="steeringWheel"
                value={productData.steeringWheel}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="colour">
              <Form.Label>Colour</Form.Label>
              <Form.Control
                name="colour"
                value={productData.colour}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="fuel">
              <Form.Label>fuel</Form.Label>
              <Form.Control
                name="fuel"
                value={productData.fuel}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </>
        )}
        <Form.Group className="mb-3" controlid="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="year">
          <Form.Label>Year</Form.Label>
          <Form.Control
            name="year"
            value={productData.year}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="km">
          <Form.Label>km</Form.Label>
          <Form.Control
            name="km"
            value={productData.km}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="engine">
          <Form.Label>engine</Form.Label>
          <Form.Control
            name="engine"
            value={productData.engine}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="horsePower">
          <Form.Label>HorsePower</Form.Label>
          <Form.Control
            name="horsePower"
            value={productData.horsePower}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="image"
            value={productData.image}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlid="condition">
          <Form.Label>Condition</Form.Label>
          <Form.Control
            name="condition"
            value={productData.condition}
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
