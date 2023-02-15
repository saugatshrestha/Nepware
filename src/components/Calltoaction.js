import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bgImage from '../assets/images/call-to-action-bg.webp';
import Button from './Button';


export default function Calltoaction() {
    return (
        <>
            <section className='section-call-to-action' style={{background: `url(${bgImage})`}}>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={7}>
                            <div className='text-center'>
                                <h3>
                                    Let's start something new together
                                </h3>
                                <Button btnLink="/" btnClass="btn-primary" btnText="Get in Touch"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
