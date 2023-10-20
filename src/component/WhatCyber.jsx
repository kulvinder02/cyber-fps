import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gunfire from '../assets/images/gun-fire-img.png'

function WhatCyber() {
  return (
    <div className='bg-white blur-doted-bg pb-xl-5'>
      <Container className='pt-xl-0  mt-4 pt-2 mt-xl-0 pb-xl-5 Container-custom'>
      <Row className='mt-xl-5 pt-lg-5 pb-lg-5'>
        <Col lg={6} >
          <div className=''>
          <h2 className='fs-64 fw-400  ff-Audiowide clr-balck position-relative heading-line2 mb-3 mt-md-4'>What is <span className='clr-green fs-64 fw-400 mt-5 pt-lg-5 ff-Audiowide'>CyberFPS</span></h2>
             <p className='fs-16 fw-400 clr-balck ff-Montserrat pt-lg-3 para-wdth2'>CyberFPS is centered around 5v5 Search & Destroy style combat with P2E mechanics featuring the $AMMO Token and deep integrations within the CryptoStraps ecosystem.</p>
            <p className='fs-16 fw-400 clr-balck ff-Montserrat para-wdth2'>CyberFPS pits 2 teams of 5 players against each other with the objective being to attack or defend depending on which side you start on. This "Search & Destroy" style combat has been implemented in many popular FPS titles and is a high-skill cap game mode.</p>
          </div>
        </Col>
        <Col lg={6} className='d-flex justify-content-center'>
            <img src={gunfire} className='mt-3 pt-lg-4  mt-lg-4  pb-5 mb-sm-3 sm-img-wdth' />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default WhatCyber