import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// STYLES
import '../styles/header.css';

function Header() {
    return (
        <>
            <Container className='header-container' fluid={true}>
                <div className='desktop-header'>
                    <Row>
                        <Col>
                            <div className='header-link'>
                                <Link to='/'>
                                    <span className='name'>Gage Everett. </span><span className='profession'>Full Stack Developer</span>
                                </Link>
                                
                            </div>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <ul className='header-list'>
                                        <li>
                                            <div className='header-link'>
                                                <Link to='/projects'>
                                                    Work
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='header-link'>
                                                <Link to='/contact'>
                                                    Contact
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Header
