import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PortfolioDescription from './PortfolioDescription';

export default function Portfolio() {
    return (
        <>
            <section className='section-portfolio text-white'>
                <Container>
                    <h1 className='section__title'>My Recent Works</h1>
                    <Row>
                        <Col md={4}>
                            <PortfolioDescription title="Portfolio 1" description="This is a portfolio description"/>
                        </Col>
                        <Col md={4}>
                            <PortfolioDescription title="Portfolio 2" description="This is a portfolio description"/>
                        </Col>
                        <Col md={4}>
                            <PortfolioDescription title="Portfolio 3" description="This is a portfolio description"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
