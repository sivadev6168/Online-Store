import React,{ useContext, useState} from 'react';
import { ApiContext } from '../contexts/ApiContext';
import { Button, Col, Container, Row, Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ModalMain from './Modal';
import PurchaseModal from './PurchaseModal';

const Jewelery = () => {
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
          src="https://img.freepik.com/free-photo/jewelry-lifestyle-flat-layout-with-place-text-jewellery-background-mockup-banner-fashion-accessories_460848-12624.jpg?w=900&t=st=1673175294~exp=1673175894~hmac=66b7b4eee32e3e70b8338b96e762ebeb406ee5f19bdd72411c0e46794e54035f"
          alt="First slide"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/vogue-beautiful-woman-posing-black-dress_144627-11645.jpg?w=826&t=st=1673198760~exp=1673199360~hmac=963714c836a15ccb8860b06cff4f69752536e948fa1618298077da04c921fa05"
          alt="Second slide"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/fine-jewelry-promotion-ears-woman_114579-11505.jpg?w=826&t=st=1673197115~exp=1673197715~hmac=78b28f90ee97e4a2052fce3f7fd5de01d31f5c5fabf4f853b79ce9f8dba90f75"
          alt="Third slide"
          style={imageStyle}
        />
      </Carousel.Item>
    </Carousel>


    <Container>
    <Row>
    <h1 className="display-3 text-center mt-5">Jewelery</h1>
    <CardGroup>
    {product.filter(newprod => newprod.category==="jewelery").map(filterProd=>(
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


export default Jewelery