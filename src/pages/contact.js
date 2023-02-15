import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet, Link, Form } from "react-router-dom";

function Contact() {
    return (
        <>
           <section className="section-contact">
                <Container>
                    <Row>
                        <Col md={5}>
                            <div className="contact-sidebar">
                                <Form method="post">
                                    <button type="submit">New</button>
                                </Form>
                            </div>
                            <div className="contact-navlist">
                                <ul>
                                    <li>
                                        <Link to={`/contact/1`}>Saugat Shrestha</Link>
                                    </li>
                                    <li>
                                        <Link to={`/contact/2`}>Dinesh Shrestha</Link>
                                    </li>
                                    <li>
                                        <Link to={`/contact/3`}>Rabin Dahal</Link>
                                    </li>
                                    <li>
                                        <Link to={`/contact/4`}>Anurag Pradhan</Link>
                                    </li>
                                    <li>
                                        <Link to={`/contact/5`}>Abhilash Joshi</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={7}>
                            <Outlet/>
                        </Col>
                    </Row>
                </Container>
           </section>
        </>
    )
}

export default Contact;
