import React,{ useContext, useState} from 'react';
import { ApiContext } from '../contexts/ApiContext';
import { Button, Col, Container, Row, Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ModalMain from './Modal';
import PurchaseModal from './PurchaseModal';

const WomensClothing = () => {
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
            src="https://img.freepik.com/free-photo/woman-model-business-suit-wearing-hat_1303-17693.jpg?w=900&t=st=1673196601~exp=1673197201~hmac=71a03826dc05722ad3876aa6c34d6822b190a318695ab3bebb18c950580db44c"
            alt="First slide"
            style={imageStyle}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/front-view-woman-posing-black-white_23-2149735215.jpg?w=900&t=st=1673196715~exp=1673197315~hmac=6bf1942c62f4d446c88ce7c93ed2e7dccec002454e491a06249a31ae273117f1"
            alt="Second slide"
            style={imageStyle}
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/08/04/18/30/model-1569741_960_720.jpg"
            alt="Third slide"
            style={imageStyle}
          />
        </Carousel.Item>
      </Carousel>
  
  
      <Container>
      <Row>
      <h1 className="display-3 text-center mt-5">Jewellery</h1>
      <CardGroup>
      {product.filter(newprod => newprod.category==="women's clothing").map(filterProd=>(
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

export default WomensClothing


