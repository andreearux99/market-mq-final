import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getProperties, getCategories } from '../actions/property';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Property from '../components/Property';
import { Helmet } from 'react-helmet-async';
import { PROPERTY_DELETE_RESET } from '../constants/propertyActionTypes';
import { BiX, BiChevronDown } from 'react-icons/bi';
import {
  yearArr,
  usefulSurfaceArray,
  furnishedArray,
  priceArr,
  roomsArray,
  propertyCategories,
  allModels,
  mainCategoryArr,
} from '../utils';
import PropertySearchBox from '../components/PropertySearchBox';

export default function FiltersProperty() {
  const [modelArray, setModelArray] = useState([]);
  const [propertyCategorySelected, setPropertyCategorySelected] = useState('all');

  const [minYearSelected, setMinYearSelected] = useState('From');
  const [maxYearSelected, setMaxYearSelected] = useState('To');
  const [minPriceSelected, setMinPriceSelected] = useState('From');
  const [maxPriceSelected, setMaxPriceSelected] = useState('To');
  //const [editInput, setEditInput] = useState(false);

  const navigate = useNavigate();
  const {
    propertyName = 'all',
    mainCategory = 'all',
    propertyCategory = 'all',
    
    minYear = 0,
    maxYear = 0,
    minPrice = 0,
    maxPrice = 0,
  } = useParams();

  const dispatch = useDispatch();
  const propertiesList = useSelector((state) => state.propertiesList);
  const { loading, error, properties, count } = propertiesList;

  const deletedProperty = useSelector((state) => state.deletedProperty);
  const { error: errorDelete, success: successDelete } = deletedProperty;

  // const propertiesCategoryList = useSelector((state) => state.propertiesCategoryList);
  // const {
  //   loading: loadingCategory,
  //   error: errorCategory,
  //   categories,
  // } = propertiesCategoryList;

  useEffect(() => {
    if (successDelete) {
      dispatch({ type: PROPERTY_DELETE_RESET });
    }
    //dispatch(getCategories());
    dispatch(
      getProperties({
        propertyName: propertyName !== 'all' ? propertyName : '',
        propertyCategory: propertyCategory !== 'all' ? propertyCategory : '',

        minYear,
        maxYear,
        minPrice,
        maxPrice,
      })
    );
  }, [
    dispatch,
    propertyName,
    propertyCategory,
    successDelete,
    
    minYear,
    maxYear,
    minPrice,
    maxPrice,
  ]);

  const getFilterUrl = (filter) => {
    const filterPropertyCategory = filter.propertyCategory || propertyCategory;
    const filterPropertyName = filter.propertyName || propertyName;
    
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
      
      

    return `/properties/filters/propertyName/${filterPropertyName}/propertyCategory/${filterPropertyCategory}/minPrice/${filterMinPrice}/maxPrice/${filterMaxPrice}/minYear/${filterMinYear}/maxYear/${filterMaxYear}/`;
  };
  const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  useEffect(() => {
    Object.entries(allModels).map((item) => {
      if (item[0] == propertyCategory) {
        setModelArray(item[1]);
      }
    });
  }, [propertyCategory, allModels]);

  return (
    <div className="main-container">
      <Helmet>
        <title>Market App</title>
      </Helmet>
      <PropertySearchBox />
      <h3>Filters</h3>{' '}
      <div className="filters-container">
        <section className="mainCategory">
          <label className="mb-1">Main category</label>
          <div className="dropdown" controlid="mainCategory">
            <button className="dropbtn">
              {'Properties'}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
            {mainCategoryArr.map((mc, index) => (
                <Link
                  to={`/${mc}/filters`}
                  key={index}
                  style={{ textDecoration: 'none' }}
                >
                  {capitalizeFirst(mc)}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="propertyCategory">
          <label className="mb-1">Category</label>
          {/* {loadingCategory ? (
            <LoadingBox></LoadingBox>
          ) : errorCategory ? (
            <MessageBox variant="danger">{errorCategory}</MessageBox>
          ) : ( */}
          <div className="dropdown" controlid="propertyCategory">
            <button className="dropbtn">
              {propertyCategorySelected}
              <span>
                <BiChevronDown className="icon-style" />
              </span>
            </button>
            <div className="dropdown-content">
              {propertyCategories.map((p, index) => (
                <Link
                  key={index}
                  to={getFilterUrl({ propertyCategory: p, propertyName: 'all'})}
                  style={{ textDecoration: 'none' }}
                  onClick={() => {
                    setPropertyCategorySelected(p)
                  }}
                >
                  {p}
                </Link>
              ))}
            </div>
          </div>
          {/* )} */}
        </section>
        
        <section className="year">
          <label className="mb-1">Fabrication year</label>
          <div className="interval-filter">
            <div className="dropdown-interval" controlid="year">
              <button className="dropbtn-interval">
                {minYearSelected}
                <span>
                  {minYearSelected === 'From' ? (
                    <BiChevronDown className="icon-style" />
                  ) : (
                    <Link to={getFilterUrl({ minYear: 0 })}>
                      <BiX
                        className="icon-style"
                        onClick={() => setMinYearSelected('From')}
                      />
                    </Link>
                  )}
                </span>
              </button>
              <div className="dropdown-content-interval">
                {yearArr.map((y, index) => (
                  <Link
                    to={getFilterUrl({ minYear: y })}
                    key={index}
                    onClick={() => setMinYearSelected(y)}
                  >
                    {y}
                  </Link>
                ))}
              </div>
            </div>
            <div className="dropdown-interval" controlid="year">
              <button className="dropbtn-interval">
                {maxYearSelected}
                <span>
                  {maxYearSelected === 'To' ? (
                    <BiChevronDown className="icon-style" />
                  ) : (
                    <Link to={getFilterUrl({ maxYear: 0 })}>
                      <BiX
                        className="icon-style"
                        onClick={() => setMaxYearSelected('To')}
                      />
                    </Link>
                  )}
                </span>
              </button>
              <div className="dropdown-content-interval">
                {yearArr.map((y, index) => (
                  <Link
                    to={getFilterUrl({ maxYear: y })}
                    key={index}
                    onClick={() => setMaxYearSelected(y)}
                  >
                    {y}
                  </Link>
                ))}
              </div>
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
                  <Link
                    to={getFilterUrl({ minPrice: p })}
                    key={index}
                    style={{ textDecoration: 'none' }}
                    onClick={() => setMinPriceSelected(p)}
                  >
                    {p}
                  </Link>
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
      </div>
      <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {properties.length === 0 && <MessageBox>No Product Found</MessageBox>}
            <div className="product-list">
              {properties.map((property, index) => (
                <Property key={index} property={property} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
