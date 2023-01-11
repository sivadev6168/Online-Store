import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../components/css/Parallax.css'

const Parallax = () => {
  return (
<>
<Container fluid className='mobile-mode'>
      <Row>
      <h1 className="display-3 text-center mt-5">Share Your Style</h1>
        <Col xs={12} md={6}><figure>
  <img src="https://images.pexels.com/photos/6567275/pexels-photo-6567275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
</figure></Col>
        <Col xs={12} md={6} className="mt-2"><p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in laoreet nulla. Aenean molestie magna velit, vel interdum mi feugiat in. Sed hendrerit, neque non molestie imperdiet, ipsum mi condimentum velit, sed mattis quam magna vitae quam. Vivamus quis pharetra quam. Nam pulvinar tristique tortor, in rhoncus metus volutpat nec. Suspendisse laoreet lorem eu tincidunt porttitor. Suspendisse ac blandit orci, vitae facilisis erat.</p></Col>
      </Row>
      </Container>
      <Container fluid className='main-mode'>
<h1 className="display-3 text-center mt-5">Share Your Style</h1>
<figure>
  <img src="https://images.pexels.com/photos/6567275/pexels-photo-6567275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
</figure>

<figure data-parallax></figure>

<figure>
  <img src="https://images.pexels.com/photos/3865946/pexels-photo-3865946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
</figure>
</Container>
</>
  )
}

export default Parallax