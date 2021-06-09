import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';

// STYLES
import '../styles/home.css';
import '../styles/home.scss';

function Home() {
    return (
        <>
            <Container className='home-container' fluid={true}>
                {/* INTRO */}
                <Fade>
                    <div className='home-intro-wrapper'>
                        <div className='home-intro-container'>
                            <Row>
                                <Col>
                                    <div className='home-intro-box'>
                                        <span className='home-intro-title'>
                                            Gage Everett
                                        </span>
                                        <span className='home-intro-title'>
                                             
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>   
                </Fade>
                {/* WORK */}
                <Fade>
                    <div className='home-project-wrapper'>
                        <div className='home-project-container'>
                            <Row>
                                <Col>
                                    <div className='home-project-title-box'>
                                        <p className='home-project-title'>Selected Projects</p>
                                    </div>
                                </Col>
                            </Row>
                        {/* ARCHIVED */}
                        <Row>
                            <Col>
                                <div className='home-selected-projects'>
                                    <div>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                        {/* ARCHIVED */}
                            <Row>
                                <Col>
                                
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Fade>
                {/* ABOUT */} 
                <Fade>
                    <div className='home-about-wrapper'>
                        <div className='home-about-container'>
                            <Row>
                                <Col>

                                </Col>
                            </Row>
                        </div>
                    </div>
                </Fade>
                {/* CONTACT */}
                <Fade>
                    <div className='home-contact-wrapper'>
                        <div className='home-contact-container'>
                            <Row>
                                <Col>
                                
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Fade>
            </Container> 
        </>
    )
}

export default Home
