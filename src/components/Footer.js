import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
    return (
        <>
            <div className='theme-footer'>
                <Container>
                    <Row>
                        <Col>
                            <p className='mb-0'>
                                &copy; Copyright 2023, All rights reserved
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
