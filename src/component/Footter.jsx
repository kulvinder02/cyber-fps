import React from 'react'
import Container from 'react-bootstrap/Container';
import Hero_logo from '../assets/images/hero-logo.png'
import { Discord, Insta, Twiter } from './svg';

function Footter() {
  return (
    <div className='fttr-bg'>
       <Container className='d-flex flex-column justify-content-center text-center Container-custom'>
       <div className='d-flex justify-content-center pt-4'>
       <img src={Hero_logo} alt="" className='fttr-img'/>
       </div>
       <div className='mt-4'>
              <a href=""> <Twiter/></a>
              <a href=""> <Insta/></a>
              <a href=""> <Discord/></a>
            </div>
       </Container>
       <div className='fttr-line mt-5'></div>
        <h5 className='fs-16 fw-400 clr-white text-center mt-4 pb-4'>© Cyber FPS 2022</h5>

    </div>
  )
}

export default Footter