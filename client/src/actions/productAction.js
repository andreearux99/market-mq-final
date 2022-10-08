import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constants/actionTypes';
import Axios from 'axios';

export const getProducts = ({
  name = '',
  mainCategory = '',
  category = '',
  model = '',
  carosery = '',
  fuel = '',
  steeringWheel = '',
  subCategory = '',
  brand = '',
  rezolution = '',
  image = '',
  description = '',
  colour = '',
  condition = '',
  furnished = '',
  rooms = '',
  groundType = '',
  commerceType = '',
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
}) => async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    const { data } = await Axios.get(
      `http://localhost:5000/products?name=${name}&mainCategory=${mainCategory}&category=${category}&subCategory=${subCategory}&model=${model}&carosery=${carosery}&groundType=${groundType}&commerceType=${commerceType}&fuel=${fuel}&furnished=${furnished}&rooms=${rooms}&steeringWheel=${steeringWheel}&brand=${brand}&rezolution=${rezolution}&colour=${colour}&condition=${condition}&minPrice=${minPrice}&maxPrice=${maxPrice}&minUsefulSurface=${minUsefulSurface}&maxUsefulSurface=${maxUsefulSurface}&minYear=${minYear}&maxYear=${maxYear}&minKm=${minKm}&maxKm=${maxKm}&minEngine=${minEngine}&maxEngine=${maxEngine}&minHorsePower=${minHorsePower}&maxHorsePower=${maxHorsePower}`
    );
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    const { data } = await Axios.get(`http://localhost:5000/products/${productId}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = (newProduct) => async (dispatch) => {
  dispatch({ type: PRODUCT_CREATE_REQUEST });
  try {
    const { data } = await Axios.post('http://localhost:5000/products', newProduct);
    dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_CREATE_FAIL, payload: message });
  }
};

export const updateProduct = (product) => async (dispatch) => {
  dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });
  try {
    const { data } = await Axios.put(
      `http://localhost:5000/products/${product._id}`,
      product
    );
    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_UPDATE_FAIL, error: error });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_DELETE_REQUEST });
  try {
    await Axios.delete(`http://localhost:5000/products/${id}`);

    dispatch({ type: PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    dispatch({ type: PRODUCT_DELETE_FAIL });
  }
};