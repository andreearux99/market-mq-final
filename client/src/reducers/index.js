import { combineReducers } from 'redux';
import * as reducers from './reducer';

export const reducer = combineReducers({
  productsList: reducers.productListReducer,
  createdProduct: reducers.productCreateReducer,
  deletedProduct: reducers.productDeleteReducer,
  updatedProduct: reducers.productUpdateReducer,
  detailedProduct: reducers.productDetailsReducer,
});
