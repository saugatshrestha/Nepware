import React from 'react';
import logo from '../assets/images/logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

export default function Header({primaryBtn}) {
    return (
        <>
            <header className="theme-header">
				<Container>
                    <Row className='justify-content-between align-items-center'>
                        <Col md={3}>
                            <div className='site-logo'>
                                <Link to='/' className='d-inline-block'>
                                    <img src={logo} alt="Logo" className='mw-100'/>
                                </Link>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className='site-navigation'>
                                <ul className='d-flex align-items-center justify-content-end'>
                                    <li>
                                        <Link to='/about'>About</Link>
                                    </li>
                                    <li>
                                        <Link to='/services'>Services</Link>
                                    </li>
                                    <li>
                                        <Link to='/work'>Work</Link>
                                    </li>
                                    <li>
                                        <Link to='/company'>Company</Link>
                                    </li>
                                    <li>
                                        <Link to='/team'>Team</Link>
                                    </li>
                                    <li>
                                        <Link to='/careers'>Careers</Link>
                                    </li>
                                    <li>
                                        <Link to='/contact'>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {primaryBtn ? 
                            <Col md={2}>
                                <Link to="/" className='btn btn-primary'>Get Started</Link>
                            </Col>
                            : ""
                        }
                    </Row>
                </Container>
            </header>
        </>
    )
}
