import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCT_UPDATE_RESET } from '../constants/actionTypes';
import { useNavigate, useParams } from 'react-router-dom';
import { detailsProduct, updateProduct } from '../actions/productAction';
import toast from 'react-hot-toast';


// Carousel imports
import { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Seller & product images
import seller from '../data/seller.jpg';
import productImg from '../data/product.jpg';
import mainImage from '../data/asdfasdf.jpg';


const editToastFail = () =>
  toast.error('Sorry! Product unsuccessfully edited!');
const editToastSuccess = () => toast.success('Product successfully edited!');

const ProductPage = () => {
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
      var productImg = product.image.indexOf(".") == -1 ? product.image+ '.jpg' : product.image;
      setImage(require('../data/'+productImg));
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
          <div className="product-page">
            <div className="product-description">
              <h1>{name}</h1>
              <br/>

              <Carousel>
                  <div>
                      <img src={image} />
                  </div>
                  <div>
                      <img src={productImg} />
                  </div>
                  <div>
                      <img src={productImg} />
                  </div>
                  <div>
                      <img src={productImg} />
                  </div>
              </Carousel>


              <h3>{price} RON</h3>
              <h5>Description</h5>
              <p>{description}</p>
          </div>

          <div className="seller-details">
            <div>
              <img src={seller} alt="Negulescu Liviu" />
              <p>
                <span>Negulescu Liviu</span><br />
                Pe Metaquantum din <b>iulie 2011</b><br/>
                Activ azi la 12:34
              </p>
            </div>

            <div className="account-details">
              <p>
                Intră în contul tău Metaquantum sau creează un cont nou pentru a contacta acest vânzător
                <br/><br/>
                <a href="#">Intra in cont</a><span> / </span><a href="#">Cont nou</a>
              </p>
            </div>

            <div>
              <button>Suna vanzatorul</button>
              <button>Trimite mesaj</button>
            </div>

          </div>

      </div>
  );
};

export default ProductPage;
