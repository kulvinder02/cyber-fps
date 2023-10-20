import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gameplay from '../assets/images/gameplay-img1.png'
import { Vdiobttn } from './svg';

function GamePlaysection() {
  return (
    <div className='bg-white'>
      <Container className='Container-custom'>
        <h2 className='fs-64 fw-400 text-center mt-lg-5  mt-4  pt-2 pt-sm-3 pt-lg-5 ff-Audiowide section2-line position-relative'>CyberFPS <span className='clr-green'>Gameplay</span></h2>
       <div className='position-relative'> 
       <img src={Gameplay}  className='w-100 mt-xl-5 mt-2 mt-sm-3 pb-sm-3 mb-xl-0 pt-xl-4'/>
          <Vdiobttn/>
       </div>
    </Container>
    </div>
  )
}

export default GamePlaysection