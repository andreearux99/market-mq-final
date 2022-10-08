import React, { useEffect, useState } from 'react';
import {
  Button,
  Modal,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../actions/productAction';
import toast from 'react-hot-toast';

const deleteToast = () => toast.success('Successfully deleted!');

const Auto = (props) => {
  const [showDelete, setShowDelete] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);

  const { product } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (deleteItem === true) {
      deleteToast();
      dispatch(deleteProduct(product._id));
      setDeleteItem(false);
    }
  }, [deleteItem]);

  const handleClose = () => {
    setShowDelete(false);
  };

  const deleteHandler = () => {
    setShowDelete(true);
  };

  let classString = 'fas fa-trash deleteButton';

  return (
    <div className="product">
      <strong>Name:</strong> {product.name}
      <br></br>
      <strong>Category:</strong> {product.category}
      <br></br>
      <strong>Model:</strong> {product.model}
      <br></br>
      <strong>Price:</strong> {product.price}
      <br></br>
      <strong>Rooms:</strong> {product.rooms}
      <br></br>
      <strong>Furnished:</strong> {product.furnished}
      <br></br>
      <strong>Image:</strong> {product.image}
      <br></br>
      <strong>Description:</strong> {product.description}
      <br></br>
      <strong>UsefulSurface:</strong> {product.usefulSurface}
      <br></br>
      <i
        onClick={() => deleteHandler(product)}
        className={`${classString}`}
      ></i>
      <i
        className="fas fa-pen"
        onClick={() => navigate(`/${product._id}/editProduct`)}
      ></i>
      <Modal
        show={showDelete}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setDeleteItem(true)}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Auto;
