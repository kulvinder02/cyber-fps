import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cryptostrpd from '../assets/images/cryptostraps-img.png'


function CryptoSection() {
  return (
    <div className='bg-black overflow-hidden'>
    <Container className='pt-lg-3 pt-xl-5  pb-lg-4 pb-xl-5 pb-sm-3 Container-custom'>
    <Row className='pt-xl-5 pb-5'>
      <Col lg={5} className='text-center text-xl-start order-1 order-xl-0'>
      <img src={cryptostrpd} alt="#" className=' mt-4 mt-xl-0 wdth-img pt-lg-5 pt-xl-0' />
      </Col>
      <Col lg={1}></Col>
      <Col lg={6}>
      <div className='mt-4 pt-2 pt-sm-4 text-xl-start'>
        <h2 className='ff-Audiowide fs-64 fw-400 clr-white heading-line3 position-relative'>CryptoStraps </h2>
        <p className='fs-16 fw-400 ff-Montserrat para-op para-wdth mt-4'>CryptoStraps are firearms pushing the boundaries of 3D animated art. CyberFPS will be powered by CryptoStraps $AMMO and is directly integrated with the existing CryptoStraps NFTs. You will be able to use CryptoStraps NFTs in-game and the visuals/graphics of CyberFPS are designed by the CryptoStraps 3D Studio.</p>
      </div>
      </Col>
    </Row>
  </Container>
  </div>
  )
}

export default CryptoSection