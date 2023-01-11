import React,{ useContext, useState} from 'react';
import { ApiContext } from '../contexts/ApiContext';
import { Button, Col, Container, Row, Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ModalMain from './Modal';
import PurchaseModal from './PurchaseModal';

const Electronics = () => {
  const [product] = useContext(ApiContext)
  const [currentSelectedProduct, setcurrentSelectedProduct] = useState('');
  const [showModal, setShowModal] = useState(false)
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const closePurchaseModal = ()=>{
    setShowPurchaseModal(false)
  }
  const closeModal = (fromBuy) =>{
    if(fromBuy){
      setShowPurchaseModal(true)
    }
    setShowModal(false);
  }
  const imageStyle = {
    height:"95vh", 
    objectFit:"cover"
  }
  console.log(product);
  return (
    <>

    <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
            style={imageStyle}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/6751556/pexels-photo-6751556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
            style={imageStyle}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
            style={imageStyle}
          />
        </Carousel.Item>
      </Carousel>
  
  
      <Container>
      <Row>
      <h1 className="display-3 text-center mt-5">Electronics</h1>
      <CardGroup>
      {product.filter(newprod => newprod.category==="electronics").map(filterProd=>(
        <>
      <Col sx={4}  className="m-3" key={filterProd.id}>   
          <Card style={{ width: '18rem'}} className="p-2 text-center h-100">
        <Card.Img style={{width:"50%", height:"50%",  marginLeft:"auto", marginRight:"auto"}} variant="top" src={filterProd.image} />
        <Card.Body>
          <Card.Title style={{ fontSize: '.8rem' }}>{filterProd.title.substring(0, 15)}...</Card.Title>
          <Card.Text>
           Price:{filterProd.price}
          </Card.Text>
          <Button className='button-1-custom' variant="primary" onClick={() => {setShowModal(true);setcurrentSelectedProduct(filterProd)}}>Shop Now</Button>
        </Card.Body>
      </Card>
      </Col>
  <ModalMain showModal={showModal} closeModal={closeModal} currentProduct={currentSelectedProduct}/>
  <PurchaseModal showPurchaseModal={showPurchaseModal} closePurchaseModal={closePurchaseModal} currentProduct={currentSelectedProduct}/>
  </>
  
      ))}
  
      </CardGroup>
      </Row>
      </Container>
    </>
  )
}

export default Electronics



