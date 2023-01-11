import React from "react";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./css/Modal.css"
const ModalMain = (props) => {
  const modalStyle = {
    height: "250px",
    overflowY: "auto",
    paddingBottom: "10px",
  };
  return (
    <>
      <Modal
        show={props.showModal}
        onHide={() => props.closeModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ fontSize: "1rem" }}
          >
            {props.currentProduct.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row className="m-4">
              <Col xs={12} md={4}>
                <Card.Img
                  variant="top"
                  src={props.currentProduct.image}
                  style={{ width: "70%" }}
                />
              </Col>
              <Col xs={12} md={8}>
                <Card.Text>
                  Category : {props.currentProduct.category}
                </Card.Text>
                <Card.Text>price : {props.currentProduct.price}</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Tabs
                  defaultActiveKey="Description"
                  id="fill-tab-example"
                  className="mb-3"
                  fill
                >
                  <Tab
                    eventKey="Description"
                    title="Description"
                    style={modalStyle}
                  >
                    {props.currentProduct.description}
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Container>
          <Button
            variant="primary"
            onClick={() => props.closeModal(true)}
            className="m-2"
            id="modal-btn"
          >
            Buy
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalMain;
