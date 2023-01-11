import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../components/css/CatGrid.css"
import { Link } from 'react-router-dom';



const GridCat = () => {
 const textStyle={
    textAlign:"center"
 }
 const col_p={
padding:"0"
 }
  return (
    <Container fluid>
        <h1 className="display-3 text-center mt-5">Explore With Us</h1>
    <Row className="px-1">
      <Col  xs={6} style={col_p} className="col-hover">
        <Link to="/WomensClothings">
      <div className="card">
         <img className="card-img" src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bologna"/>
        <div className="card-img-overlay text-white d-flex flex-column justify-content-center" style={{ boxShadow: "inset 0 0 0 2000px rgba(0,0,0,.5)"}}>
          <h4 className="card-title" style={textStyle}>Women's Clothing</h4>
        </div>
      </div>
      </Link>
      </Col>
      <Col  xs={6} style={col_p} className="col-hover">
        <Link to="/Mens-clothing">
      <div className="card" src="/shop">
         <img className="card-img" src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bologna"/>
        <div className="card-img-overlay text-white d-flex flex-column justify-content-center" style={{ boxShadow: "inset 0 0 0 2000px rgba(0,0,0,.5)"}}>
          <h4 className="card-title"style={textStyle}>Men's Clothing</h4>
        </div>
      </div>
      </Link>
    </Col>
    </Row>

    <Row className="px-1">
      <Col  xs={6} style={col_p} className="col-hover">
        <Link to="/Electronics">
      <div className="card">
         <img className="card-img" src="https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bologna"/>
        <div className="card-img-overlay text-white d-flex flex-column justify-content-center" style={{ boxShadow: "inset 0 0 0 2000px rgba(0,0,0,.5)"}}>
          <h4 className="card-title" style={textStyle}>Electronics</h4>
        </div>
      </div>
      </Link>
      </Col>
      <Col  xs={6} style={col_p} className="col-hover">
        <Link to="/Jewelery">
      <div className="card">
         <img className="card-img" src="https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bologna"/>
        <div className="card-img-overlay text-white d-flex flex-column justify-content-center" style={{ boxShadow: "inset 0 0 0 2000px rgba(0,0,0,.5)"}}>
          <h4 className="card-title" style={textStyle}>Jewellery</h4>
        </div>
      </div>
      </Link>
    </Col>
    </Row>
  </Container>
  )
}

export default GridCat