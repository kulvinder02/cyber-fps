import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import solana from '../assets/images/solana.png'
import unreal from '../assets/images/unreal.png'

function LastSection() {
  return (
    <div className='dotedbg-2'>
        <Container className='pb-lg-5 Container-custom'>
      <Row className='pb-5 pt-lg-5 mt-5 justify-content-center gap-4'>
        <Col md={4}>
             <img src={solana} alt="" className='w-100 h-100'/>
        </Col>
        <Col md={3}>
        <img src={unreal} alt="" className='w-100  h-100'/>
        </Col>
      </Row>
    </Container>

    </div>
  )
}

export default LastSection