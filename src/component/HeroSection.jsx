import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../assets/images/main-logo.png'
import { CircleSvg, CircleSvg2, CircleSvg3, Discord, Insta, Twiter } from './svg';
import Robot from '../assets/images/robot-img1.png'
import Hero_logo from '../assets/images/hero-logo.png'
import AOS from 'aos';
import 'aos/dist/aos.esm'

function HeroSection() {
  return (
    
    <div className='Hero-bg bg-black position-relative overflow-hidden'>
      <CircleSvg/>
      <CircleSvg2/>
      <CircleSvg3/>
        <div className='bg-circle1 circle1_position'></div>
        <Container className='Container-custom' >
         {/* navbar */}
           <div className='nav-area mt-2'>
           <div className='d-flex justify-content-between align-items-center'>
                <img src={Logo} className='nav-logo'/>
                
                <label for="iconbox" >
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <input type="checkbox" id="iconbox" hidden></input>
                <ul className='d-flex gap-links  nav-lg-screen pt-3'>
               <li className='nav-link hover-border'><a href="" className=' fs-16 fw-400 clr-white ff-Audiowide  '>About</a></li>
               <li className='nav-link hover-border'><a href="" className=' fs-16 fw-400 clr-white ff-Audiowide  '>CryptoStraps</a></li>
               <li className='nav-link hover-border'><a href="" className=' fs-16 fw-400 clr-white ff-Audiowide '>Team</a></li>
               <li className='nav-link hover-border'><a href="" className=' fs-16 fw-400 clr-white ff-Audiowide '>Faq</a></li>
               <li className='nav-link hover-border'><a href="" className=' fs-16 fw-400 clr-white ff-Audiowide '>Light Paper</a></li>
            </ul>
            <div className='d-none d-xxl-block'>
              <a href=""> <Twiter/></a>
               <a href=""><Insta/></a>
              <a href=""> <Discord/></a>
            </div>
            </div>
           </div>
       

         <Row>
            <Col md={5} className='position-relative z-2'>
       <div className='mt-4 mt-xl-5 pt-xl-5'>
       <img src={Hero_logo} className='mt-lg-5 w-100 hero-logo'/>
             <p className='clr-white fs-28 fw-400 mb-4 ff-Audiowide '>Web3 Gaming Reimagined</p>
            <div className='d-flex mt-lg-5 pt-lg-3'>
            <button className='fs-16 fw-400 clr-black hero-btn  ff-Audiowide'>Get Started</button>
            <button className='fs-16 fw-400 clr-white hro-tnsprnt-btn mx-3 ff-Audiowide'>Learn More</button>
            </div>
       </div>
            </Col>
            <Col md={7} className='text-center text-xl-end '>
                <img src={Robot} className='pt-4 hero-img mt-lg-5'/>
            </Col>
         </Row>
        </Container>


    </div>
  )
}

export default HeroSection