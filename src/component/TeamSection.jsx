import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import team_img1 from '../assets/images/team-img1.png'
import team_img2 from '../assets/images/team-img2.png'
import team_img3 from '../assets/images/team-img3.png'
import team_img4 from '../assets/images/team-img4.png'


function TeamSection() {
  return (
    <div className='bg-white'>
      <Container className='pt-xl-5 pb-xl-5 mb-sm-5  Container-custom'>
        <h2 className='fs-64 fw-400 clr-balck ff-Audiowide text-center pt-xl-5 mt-sm-3 pt-4 mt-xl-5 position-relative heading-line4'>Team</h2>
      <Row className='mt-4 mt-lg-5 pt-lg-4 pb-xl-0 mb-4 mb-lg-5'>
        <Col sm={6} lg={3}>
          <div className='card-hover'>
          <img src={team_img1} alt=""  className='w-100'/>
            <h3 className='fs-24 fw-600 clr-balck ff-Montserrat mt-4'>Collin</h3>
            <h4 className='fs-16 fw-400 clr-balck ff-Montserrat'>Founder</h4> 
          </div>
        </Col>
        <Col sm={6} lg={3}>
           <div className='card-hover'>
           <img src={team_img2} alt=""  className='w-100'/>
            <h3 className='fs-24 fw-600 clr-balck ff-Montserrat mt-4'>Pharaox</h3>
            <h4 className='fs-16 fw-400 clr-balck ff-Montserrat'>Founder</h4>
           </div>
        </Col>
        <Col sm={6} lg={3}>
           <div className='card-hover'>
           <img src={team_img3} alt=""  className='w-100'/>
            <h3 className='fs-24 fw-600 clr-balck ff-Montserrat mt-4'>Zach</h3>
            <h4 className='fs-16 fw-400 clr-balck ff-Montserrat'>CM</h4>
           </div>
        </Col>
        <Col sm={6} lg={3}>
           <div className='card-hover'>
           <img src={team_img4} alt=""  className='w-100'/>
            <h3 className='fs-24 fw-600 clr-balck ff-Montserrat mt-4'>Arlen</h3>
            <h4 className='fs-16 fw-400 clr-balck ff-Montserrat'>CM</h4>
           </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default TeamSection