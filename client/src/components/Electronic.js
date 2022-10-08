import React, { useEffect, useState } from 'react';
import {
  Button,
  Modal,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteElectronic } from '../actions/electronic';
import toast from 'react-hot-toast';

const deleteToast = () => toast.success('Successfully deleted!');

export default function Electronic(props) {
  const [showDelete, setShowDelete] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);

  const { electronic } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (deleteItem === true) {
      deleteToast();
      dispatch(deleteElectronic(electronic._id));
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
      <strong>Name:</strong> {electronic.elName}
      <br></br>
      <strong>Category:</strong> {electronic.elCt}
      <br></br>
      <strong>Sub Category:</strong> {electronic.subCt}
      <br></br>
      <strong>Brand:</strong> {electronic.brand}
      <br></br>
      <strong>Price:</strong> {electronic.price}
      <br></br>
      <strong>Rez:</strong> {electronic.rez}
      <br></br>
      <strong>Status:</strong> {electronic.stat}
      <br></br>
      <strong>Image:</strong> {electronic.image}
      <br></br>
      <strong>Description:</strong> {electronic.description}
      <br></br>
      
      <i
        onClick={() => deleteHandler(electronic)}
        className={`${classString}`}
      ></i>
      <i
        className="fas fa-pen"
        onClick={() => navigate(`/${electronic._id}/editElectronic`)}
      ></i>
      <Modal
        show={showDelete}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{electronic.name}</Modal.Title>
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