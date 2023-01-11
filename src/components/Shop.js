import React,{ useContext, useState, useEffect} from 'react';
import { ApiContext } from '../contexts/ApiContext';
import { Button, Col, Container, Row, Carousel, Accordion, ListGroup, ButtonGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ModalMain from './Modal';
import "./css/Cards.css"
import "./css/Accordian.css"
import PurchaseModal from './PurchaseModal';

const Shop=()=> {
  const [product] = useContext(ApiContext)
  const [currentSelectedProduct, setcurrentSelectedProduct] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [productNew, setProductNew] = useState(product || [])
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

  useEffect(()=>{
    setProductNew(product)
  },[product])

  const FilterFn = (searchParams)=>{
    console.log(searchParams);
  let p =  product.filter((productElement)=>{
      if(searchParams == ""){
            return productElement
          }else if (productElement.title.slice(0,5).toLowerCase().includes(searchParams.toLowerCase())){
            return productNew
          }
    })
    setProductNew(p)
  }

  const lowToHigh = ()=>{
    if (true) {
      let lowestPrice = [...productNew].sort((a,b) => a.price - b.price);
        setProductNew(lowestPrice);  
    }
  }

  const highToLow = () =>{
    if (true) {
      let lowestPrice = [...productNew].sort((a,b) => b.price - a.price);
        setProductNew(lowestPrice);

     
    }
  }

const MenFilter = ()=>{
  let f1  = product.filter((menFilter) => menFilter.category==="men's clothing")
  setProductNew(f1)
}

const electronicsFilter = ()=>{
  let  f2 = product.filter((elcFilter) => elcFilter.category==="electronics")
  setProductNew(f2)
}

const jewelleryFilter = ()=>{
  let f3 = product.filter((jwlFilter) => jwlFilter.category==="jewelery")
  setProductNew(f3)
}

const womenFilter = () =>{
  let f4 = product.filter((womFilter) => womFilter.category==="women's clothing")
  setProductNew(f4)
}
  return (
    <>
    <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/jewelry-lifestyle-flat-layout-with-place-text-jewellery-background-mockup-banner-fashion-accessories_460848-12598.jpg?w=826&t=st=1673198588~exp=1673199188~hmac=627709ee7cf72d0915cf7b1635e98535ec335cb140647dca1565d1e6467f8ede"
            alt="First slide"
            style={imageStyle}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/portrait-handsome-young-man_274222-10590.jpg?w=826"
            alt="Second slide"
            style={imageStyle}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/7194009/pexels-photo-7194009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
            style={imageStyle}
          />
        </Carousel.Item>
      </Carousel>
  
      <Container fluid className='mt-5'>
      <Row>
      <Col className="col-md-3 "> 
      <h3>Filter Options</h3>
      <Accordion >
      <Accordion.Item eventKey="0" className='Accordian-Shop'>
        <Accordion.Header>Price Filter</Accordion.Header>
        <Accordion.Body>
        <Form.Group className="mb-3" controlId="formBasicCheckbox" >
      <div className="form-check mb-3">
  <input className="form-check-input" onChange={lowToHigh} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" for="flexRadioDefault1">
  Price Low ⇊ to high ⇈
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" onChange={highToLow} type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label className="form-check-label" for="flexRadioDefault2">
  Price high ⇈ To Low ⇊
  </label>
</div>
</Form.Group>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Category</Accordion.Header>
        <Accordion.Body>
      <ListGroup>
      <ListGroup.Item  onClick={MenFilter}>
      Men's Clothings
      </ListGroup.Item>
      <ListGroup.Item  onClick={jewelleryFilter}>
      Jewellery
      </ListGroup.Item>
      <ListGroup.Item  onClick={electronicsFilter}>
      Electronics
      </ListGroup.Item>
      <ListGroup.Item  onClick={womenFilter}>
      Woman's Clothings
      </ListGroup.Item>
      <ListGroup.Item>
      <Button variant="outline-secondary" className="filter-clear-btn" onClick={()=>setProductNew(product)}>Clear All</Button>
      </ListGroup.Item>
    </ListGroup>
    
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Col>
        <Col className="col-md-9 ">
        <Form className="w-50 Input-Shop">
            <Form.Control
              type="search"
              placeholder="Search Product"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>FilterFn(e.target.value)}
            />
          </Form>
        <CardGroup>
        {productNew.map((newprod, i)=>(
        <>
      <Col className="m-3" key={newprod.id}>   
          <Card style={{ width: '18rem'}} className="p-2 text-center h-100">
        <Card.Img style={{width:"50%", height:"50%",  marginLeft:"auto", marginRight:"auto"}} variant="top" src={newprod.image} />
        <Card.Body>
          <Card.Title style={{ fontSize: '.8rem' }}>{newprod.title.substring(0, 15)}...</Card.Title>
          <Card.Text>
           Price:{newprod.price}
          </Card.Text>
          <Button className='button-1-custom' variant="primary" onClick={() => {setShowModal(true);setcurrentSelectedProduct(newprod)}}>Shop Now</Button>
        </Card.Body>
      </Card>
      </Col>
  <ModalMain showModal={showModal} closeModal={closeModal} currentProduct={currentSelectedProduct}/>       
  <PurchaseModal showPurchaseModal={showPurchaseModal} closePurchaseModal={closePurchaseModal} currentProduct={currentSelectedProduct}/>
  </>
      ))}
       {productNew.length == 0 && <h1>No Product Found</h1>}
        </CardGroup>
        </Col>
      </Row>
      </Container>
    </>
  );
}

export default Shop;

