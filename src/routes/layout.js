import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <section className="section-content">
                <Container>
                    <Row>
                        <Col md={8}>
                            <div className="flex-layout__main">
                                <h2>This is a layout main.</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <Outlet/>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="flex-layout-footer">
                <Container>
                    <a href={`/contacts/2`} className="text-decoration-underline">Your Name</a>
                    <p className='mb-0'>
                        &copy; Copyright 2023, All rights reserved
                    </p>
                </Container>
            </div>
        </>
    );
}