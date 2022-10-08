import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getProducts } from '../actions/productAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Auto from '../components/Auto';
import { Helmet } from 'react-helmet-async';
import { PRODUCT_DELETE_RESET } from '../constants/actionTypes';
import { BiX, BiChevronDown } from 'react-icons/bi';
import { priceArr, mainCategoryObj, mainCategoryArr } from '../utils';
import AutoSearchBox from '../components/AutoSearchBox';
import AutoFiltersComponent from '../components/filtersComponents/AutoFiltersComponent';
import PropertyFiltersComponent from '../components/filtersComponents/PropertyFiltersComponent';

export default function FiltersAuto() {
  const [categoryFinal, setCategoryFinal] = useState([]);
  const [minPriceSelected, setMinPriceSelected] = useState('From');
  const [maxPriceSelected, setMaxPriceSelected] = useState('To');
  const [subCategoryFinal, setSubCategoryFinal] = useState([]);
  const [modelFinal, setModelFinal] = useState([]);
  const navigate = useNavigate();
  const {
    name = 'all',
    mainCategory = 'all',
    category = 'all',
    subCategory = 'all',
    model = 'all',
    carosery = 'all',
    fuel = 'all',
    steeringWheel = 'all',
    image = 'all',
    description = 'all',
    colour = 'all',
    condition = 'all',
    furnished = 'all',
    rooms = 'all',
    minUsefulSurface = 0,
    maxUsefulSurface = 0,
    minYear = 0,
    maxYear = 0,
    minKm = 0,
    maxKm = 0,
    minEngine = 0,
    maxEngine = 0,
    minHorsePower = 0,
    maxHorsePower = 0,
    minPrice = 0,
    maxPrice = 0,
  } = useParams();

  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { loading, error, products, count } = productsList;

  const deletedProduct = useSelector((state) => state.deletedProduct);
  const { error: errorDelete, success: successDelete } = deletedProduct;

  useEffect(() => {
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(
      getProducts({
        name: name !== 'all' ? name : '',
        mainCategory: mainCategory !== 'all' ? mainCategory : '',
        category: category !== 'all' ? category : '',
        subCategory: subCategory !== 'all' ? subCategory : '',
        model: model !== 'all' ? model : '',
        steeringWheel: steeringWheel !== 'all' ? steeringWheel : '',
        carosery: carosery !== 'all' ? carosery : '',
        colour: colour !== 'all' ? colour : '',
        condition: condition !== 'all' ? condition : '',
        fuel: fuel !== 'all' ? fuel : '',
        furnished: furnished !== 'all' ? furnished : '',
        rooms: rooms !== 'all' ? rooms : '',
        minUsefulSurface,
        maxUsefulSurface,
        minYear,
        maxYear,
        minKm,
        maxKm,
        minEngine,
        maxEngine,
        minHorsePower,
        maxHorsePower,
        minPrice,
        maxPrice,
      })
    );
  }, [
    dispatch,
    name,
    mainCategory,
    category,
    subCategory,
    model,
    steeringWheel,
    carosery,
    furnished,
    rooms,
    minUsefulSurface,
    maxUsefulSurface,
    colour,
    successDelete,
    condition,
    fuel,
    minYear,
    maxYear,
    minKm,
    maxKm,
    minEngine,
    maxEngine,
    minHorsePower,
    maxHorsePower,
    minPrice,
    maxPrice,
  ]);

  const getFilterUrl = (filter) => {
    const filterMainCategory = filter.mainCategory || mainCategory;
    const filterCategory = filter.category || category;
    const filterSubCategory = filter.subCategory || subCategory;
    const filterModel = filter.model || model;
    const filterSteeringWheel = filter.steeringWheel || steeringWheel;
    const filterCarosery = filter.carosery || carosery;
    const filterColour = filter.colour || colour;
    const filterCondition = filter.condition || condition;
    const filterName = filter.name || name;
    const filterFuel = filter.fuel || fuel;
    const filterFurnished = filter.furnished || furnished;
    const filterRooms = filter.rooms || rooms;
    const filterMinUsefulSurface = filter.minUsefulSurface
      ? filter.minUsefulSurface
      : filter.minUsefulSurface === 0
      ? 0
      : minUsefulSurface;
    const filterMaxUsefulSurface = filter.maxUsefulSurface
      ? filter.maxUsefulSurface
      : filter.maxUsefulSurface === 0
      ? 0
      : maxUsefulSurface;
    const filterMinPrice = filter.minPrice
      ? filter.minPrice
      : filter.minPrice === 0
      ? 0
      : minPrice;
    const filterMaxPrice = filter.maxPrice
      ? filter.maxPrice
      : filter.maxPrice === 0
      ? 0
      : maxPrice;

    const filterMinYear = filter.minYear
      ? filter.minYear
      : filter.minYear === 0
      ? 0
      : minYear;
    const filterMaxYear = filter.maxYear
      ? filter.maxYear
      : filter.maxYear === 0
      ? 0
      : maxYear;

    const filterMinKm = filter.minKm
      ? filter.minKm
      : filter.minKm === 0
      ? 0
      : minKm;
    const filterMaxKm = filter.maxKm
      ? filter.maxKm
      : filter.maxKm === 0
      ? 0
      : maxKm;

    const filterMinEngine = filter.minEngine
      ? filter.minEngine
      : filter.minEngine === 0
      ? 0
      : minEngine;
    const filterMaxEngine = filter.maxEngine
      ? filter.maxEngine
      : filter.maxEngine === 0
      ? 0
      : maxEngine;

    const filterMinHorsePower = filter.minHorsePower
      ? filter.minHorsePower
      : filter.minHorsePower === 0
      ? 0
      : minHorsePower;
    const filterMaxHorsePower = filter.maxHorsePower
      ? filter.maxHorsePower
      : filter.maxHorsePower === 0
      ? 0
      : maxHorsePower;

    return `/filters/mainCategory/${filterMainCategory}/name/${filterName}/category/${filterCategory}/subCategory/${filterSubCategory}/model/${filterModel}/steeringWheel/${filterSteeringWheel}/carosery/${filterCarosery}/colour/${filterColour}/condition/${filterCondition}/fuel/${filterFuel}/minPrice/${filterMinPrice}/maxPrice/${filterMaxPrice}/minYear/${filterMinYear}/maxYear/${filterMaxYear}/minKm/${filterMinKm}/maxKm/${filterMaxKm}/minEngine/${filterMinEngine}/maxEngine/${filterMaxEngine}/minHorsePower/${filterMinHorsePower}/maxHorsePower/${filterMaxHorsePower}/furnished/${filterFurnished}/rooms/${filterRooms}/minUsefulSurface/${filterMinUsefulSurface}/maxUsefulSurface/${filterMaxUsefulSurface}`;
  };
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  useEffect(() => {
    Object.entries(mainCategoryObj).map((item, index) => {
      if (Object.getOwnPropertyNames(mainCategoryObj)[index] == mainCategory) {
        setCategoryFinal(Object.getOwnPropertyNames(item[1]));
      }
    });
    Object.entries(mainCategoryObj.auto).map((item) => {
      if (item[0] == category) {
        setSubCategoryFinal(Object.getOwnPropertyNames(item[1]));
      }
    });
    Object.entries(mainCategoryObj.auto.cars).map((item) => {
      if (item[0] == subCategory) {
        setModelFinal(item[1]);
      }
    });
  }, [mainCategory, mainCategoryObj, category, subCategory]);

  return (
    <div className="main-container">
      <Helmet>
        <title>Market App</title>
      </Helmet>
      <AutoSearchBox />
      <h3>Filters</h3>
      <div className="filters-container">
        <section className="mainCategory">
          <label className="mb-1">Main category</label>
          <div className="dropdown" controlid="mainCategory">
            <button className="dropbtn">
              {capitalizeFirst(mainCategory)}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {mainCategoryArr.map((mc, index) => (
                <Link
                  to={`/filters/mainCategory/${mc}/name/all/category/all/subCategory/all/model/all/steeringWheel/all/carosery/all/colour/all/condition/all/fuel/all/minPrice/0/maxPrice/0/minYear/0/maxYear/0/minKm/0/maxKm/0/minEngine/0/maxEngine/0/minHorsePower/0/maxHorsePower/0/furnished/all/rooms/all/minUsefulSurface/0/maxUsefulSurface/0`}
                  key={index}
                  style={{ textDecoration: 'none' }}
                  onClick={() => {
                    setMaxPriceSelected('To');
                    setMinPriceSelected('From');
                  }}
                >
                  {capitalizeFirst(mc)}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="category">
          <label className="mb-1">Category</label>
          <div className="dropdown" controlid="category">
            <button className="dropbtn">
              {category}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {categoryFinal.map((c, index) => (
                <Link
                  to={getFilterUrl({
                    category: c,
                    name: 'all',
                    model: 'all',
                  })}
                  key={index}
                  style={{ textDecoration: 'none' }}
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="price">
          <label className="mb-1">Price</label>
          <div className="interval-filter">
            <div className="dropdown-interval" controlid="price">
              <button className="dropbtn-interval">
                {minPriceSelected}
                <span>
                  {minPriceSelected === 'From' ? (
                    <BiChevronDown className="icon-style" />
                  ) : (
                    <Link to={getFilterUrl({ minPrice: 0 })}>
                      <BiX
                        className="icon-style"
                        onClick={() => setMinPriceSelected('From')}
                      />
                    </Link>
                  )}
                </span>
              </button>
              <div className="dropdown-content-interval">
                {priceArr.map((p, index) => (
                  <div>
                    <Link
                      to={getFilterUrl({ minPrice: p })}
                      key={index}
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMinPriceSelected(p)}
                    >
                      {p}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="dropdown-interval" controlid="price">
              <button className="dropbtn-interval">
                {maxPriceSelected}
                <span>
                  {maxPriceSelected === 'To' ? (
                    <BiChevronDown className="icon-style" />
                  ) : (
                    <Link to={getFilterUrl({ maxPrice: 0 })}>
                      <BiX
                        className="icon-style"
                        onClick={() => setMaxPriceSelected('To')}
                      />
                    </Link>
                  )}
                </span>
              </button>
              <div className="dropdown-content-interval">
                {priceArr.map((p, index) => (
                  <Link
                    to={getFilterUrl({ maxPrice: p })}
                    key={index}
                    style={{ textDecoration: 'none' }}
                    onClick={() => setMaxPriceSelected(p)}
                  >
                    {p}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        <PropertyFiltersComponent
          getFilterUrl={getFilterUrl}
          category={category}
          rooms={rooms}
          furnished={furnished}
        />
        <AutoFiltersComponent
          getFilterUrl={getFilterUrl}
          subCategoryFinal={subCategoryFinal}
          modelFinal={modelFinal}
          category={category}
          subCategory={subCategory}
          steeringWheel={steeringWheel}
          model={model}
          carosery={carosery}
          fuel={fuel}
          condition={condition}
          colour={colour}
        />
      </div>
      <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
            <div className="product-list">
              {products.map((product, index) => (
                <Auto key={index} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
