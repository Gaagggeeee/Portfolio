import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';

// STYLES
import '../styles/home.css';
import '../styles/home.scss';

// IMAGES 
import unwind from '../../images/unwind.png';
import unwindmattress from '../../images/unwindmattress.png';
import unwindmattresstwo from '../../images/unwindmattresstwo.png';

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
                                            <p className='home-intro-title'>
                                                Hi I'm Gage Everett <br />
                                                A Full Stack Developer <br />
                                                based in El Paso, Tx. <br />
                                            </p>
                                            <p className='home-intro-title-two'>
                                                Currently working at <br />
                                                DGTL MLK designing <br />
                                                unforgettable sites.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>   
                    </Fade>
                    {/* WORK */}
                    <div className='home-inner-box'>
                        <Fade>
                            <div className='project-section-one'>
                                <Row>
                                    <Col md='8'>
                                        <div className='home-project-box'>
                                            <p className='home-project-title'>
                                                Unwind Sleep
                                            </p>
                                            <p className='home-project-title-info'>
                                                Unwind Sleep's website is a project I wont forget.
                                                Exposure to new API's, intruiging new frameworks 
                                                and plently of SEO and analytics for ad management.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md='4'>
                                        <div className='home-project-box'>
                                            <div className='home-project-date'>
                                                <p className='home-project-date-title'>
                                                    Date
                                                </p>
                                                <p className='home-project-date-info'>
                                                    Spring 2021
                                                </p>
                                            </div>
                                            <div className='home-project-lang'>
                                                <p className='home-project-lang-title'>
                                                    Languages
                                                </p>
                                                <p className='home-project-lang-info'>
                                                    React <br />
                                                    SCSS/CSS <br />
                                                    Bootstrap <br />
                                                    Node <br />
                                                    React <br />
                                                </p>
                                            </div>
                                            <div className='home-project-link'>
                                                <p className='home-project-link-title'>
                                                    Links
                                                </p>
                                                <a href='https://www.unwindsleep.com/'>
                                                    Website
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='project-section-img'>
                                <img src={unwind} />
                            </div>
                            <div className='project-section-one'>
                                <Row>
                                    <Col>
                                        <div className='home-project-box'>
                                            <p className='project-design'>
                                                Design
                                            </p>
                                            <p className='project-design-info'>
                                                The design choice was straight forward, make it appealing to the eye 
                                                and let the product do the talking. Displaying all the pictures at once
                                                rather than having the user go through a carousel, short informative text 
                                                to describe the features, and finally make the site fast and snappy. 
                                                All thought out to get the customer in and out with their new mattress. 
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md='5'>
                                    
                                    </Col>
                                    <Col md='7'>
                                        <div className='product-design-img'>
                                            <img src={unwindmattress} />
                                        </div>
                                        <div className='product-design-img-two'>
                                            <img src={unwindmattresstwo} />
                                        </div>
                                    </Col>
                                </Row>
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
                    </div>
                </Container> 
            
        </>
    )
}

export default Home
