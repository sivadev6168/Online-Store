import React,{ useContext, useState} from 'react';
import { ApiContext } from '../contexts/ApiContext';
import { Button, Col, Container, Row, Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ModalMain from './Modal';
import PurchaseModal from './PurchaseModal';

const MensClothing = () => {
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
  return (
    <>
  <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3951774/pexels-photo-3951774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/stylish-man-hat-sunglasses_136403-4135.jpg?w=900"
          alt="Third slide"
          style={imageStyle}
        />
      </Carousel.Item>
    </Carousel>


    <Container>
    <Row>
    <h1 className="display-3 text-center mt-5">Men's Clothing</h1>
    <CardGroup>
    {product.filter(newprod => newprod.category==="men's clothing").map(filterProd=>(
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

export default MensClothing;