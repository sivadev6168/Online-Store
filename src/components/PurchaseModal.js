import React from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./css/Modal.css";

const PurchaseModal = (props) => {
  
  return (
    <>  
      <Modal
        show={props.showPurchaseModal}
        onHide={props.closePurchaseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Product Purchased !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.currentProduct.title} is Purchased
        </Modal.Body>
        <Card.Img variant="top" src={props.currentProduct.image} style={{width:"40%"}}/>
        <Modal.Footer>    
        <Button variant="primary"  id="modal-btn" href="/">Home</Button>
          <Button variant="primary"  id="modal-btn" href="/Shop">Shop</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PurchaseModal