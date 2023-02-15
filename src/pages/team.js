import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardTeam from '../components/cards/CardTeam';

function Team() {
    return (
        <>
            <section className="section-team">
                <Container>
                    <Row>
                        <Col md={4}>
                            <CardTeam name="Saugat Shrestha" designation="Software Engineer" thumbnail="https://dummyimage.com/100"/>
                        </Col>
                        <Col md={4}>
                            <CardTeam name="Dinesh Shrestha" designation="Software Engineer" thumbnail="https://dummyimage.com/100"/>
                        </Col>
                        <Col md={4}>
                            <CardTeam name="Rabin Dahal" designation="Software Engineer" thumbnail="https://dummyimage.com/100"/>
                        </Col>
                        <Col md={4}>
                            <CardTeam name="Saugat Shrestha" designation="Software Engineer" thumbnail="https://dummyimage.com/100"/>
                        </Col>
                        <Col md={4}>
                            <CardTeam name="Saugat Shrestha" designation="Software Engineer" thumbnail="https://dummyimage.com/100"/>
                        </Col>
                        <Col md={4}>
                            <CardTeam name="Saugat Shrestha" designation="Software Engineer" thumbnail="https://dummyimage.com/100"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Team;
