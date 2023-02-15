import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function Styledcomponent({title}) {

    // Section
    const Section = styled.section`
        
    `
    const Button = styled(Link)`
        border: 1px solid #020d2e;
        color: #020d2e;
        padding: 0.7rem 1.5rem;
        border-radius: 0.2rem;
        margin-top: 1rem;
        display: inline-block;
        &:hover {
            background: #020d2e;
            color: white;
        }
    `

    const PrimaryButton = styled(Button)`
        background: green;
        color: #ffffff;
    `

    const Card = styled.div`
        background: white;
        border: 0.1rem solid #ddd;
        color: ${props => props.primary ? "#fff" : "#000"};
        padding: 2rem;
        height: 100%;
        h4 {
            font-size: 1.8rem;
            font-weight: 600;
        }
    `

    const CardPrimary = styled(Card)`
        background: red;
        color: #ffffff;
        border: none;
    `
   
    return (
        <>
            <Section>
                <h3 className='section-title'>{title}</h3>
                <Row>
                    <Col md={3}>
                        <Card>
                            <h4>Title</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                                sheets containing.
                            </p>
                            <Button to="/">Read More</Button>
                            <PrimaryButton to="/" className='ms-2'>Read More</PrimaryButton>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <CardPrimary>
                            <h4>Title</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                                sheets containing.
                            </p>
                            <Button to="/">Read More</Button>
                        </CardPrimary>
                    </Col>
                    <Col md={3}>
                        <CardPrimary>
                            <h4>Title</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                                sheets containing.
                            </p>
                            <Button to="/">Read More</Button>
                        </CardPrimary>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <h4>Title</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                                sheets containing.
                            </p>
                            <Button to="/">Read More</Button>
                        </Card>
                    </Col>
                </Row>
            </Section>
        </>
    )
}
