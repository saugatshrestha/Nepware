import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroThumb from '../assets/images/hero-thumb@2x.svg';

function Banner({title, hasDesc, hasBtnlink, hasThumb, btnUrl, desc}) {
    return (
        <>  
            <div className="page-banner">
                <Container>
                    <Row>
                        <Col md={hasThumb?8:"9"}>
                            <h1>{title}</h1>
                            {hasDesc?
                                <p className="description">
                                    {desc}
                                </p>
                                : ""
                            }
                            {hasBtnlink?
                                <Link to={btnUrl} className="btn btn-primary">
                                    View Our Work
                                </Link>
                                : ""
                            }
                        </Col>
                        {hasThumb?
                            <Col md={4}>
                                <img src={heroThumb} className="mw-100" alt="Hero Thumb"/>
                            </Col>
                            : ""
                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Banner;
