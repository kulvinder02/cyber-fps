import React from 'react'
import Container from 'react-bootstrap/Container';
// import Acrdn_bttn from '../assets/images/accrdn-bttn.png'
import Accordion from 'react-bootstrap/Accordion';
import { Accrdnradius, Accrdnradius_bttm } from './svg';

function AccrdnSection() {
  return (
    <div className='bg-black pb-5'>
      <Container className='pb-lg-5 pt-xl-4 Container-custom '>
        <h3 className='fs-64 fw-400 ff-Audiowide clr-white text-center pt-4  mt-2   position-relative heading-line4'>Faq</h3>
        <Accordion className='mx-auto pb-xl-5 mt-lg-5 pt-lg-5 pt-4'>
          <Accordion.Item eventKey="0">
            <Accrdnradius_bttm />
            <Accordion.Header>Dui lectus auctor fermentum potenti enim. ?</Accordion.Header>
            <Accrdnradius />
            <Accordion.Body>
              Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className='mt-4'>
            <Accrdnradius_bttm />
            <Accordion.Header>Placerat eros faucibus aliquam nunc, mattis</Accordion.Header>
            <Accrdnradius />
            <Accordion.Body>
              Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className='mt-4'>
            <Accrdnradius_bttm />
            <Accordion.Header>Lorem nunc nunc risus viverra a</Accordion.Header>
            <Accrdnradius />
            <Accordion.Body>
              Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className='mt-4'>
            <Accrdnradius_bttm />
            <Accordion.Header>In aliquet fusce id dictumst id</Accordion.Header>
            <Accrdnradius />
            <Accordion.Body>
              Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className='mt-4'>
            <Accrdnradius_bttm />
            <Accordion.Header>Elementum pellentesque nisi, sagittis, </Accordion.Header>
            <Accrdnradius />
            <Accordion.Body>
              Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo eget tellus nullam magna adipiscing facilisis a, nulla.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </Container>
    </div>
  )
}

export default AccrdnSection