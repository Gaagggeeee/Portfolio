import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import AOS from "aos";

// STYLES
import '../styles/home.css';
import '../styles/home.scss';

// IMAGES 
import unwind from '../../images/unwind.png';
import unwindmattress from '../../images/unwindmattress.png';
import unwinddesk from '../../images/unwinddesk.png';
import unwindpillow from '../../images/unwindpillow.png';

// VIDEOS 
import unwindlink from '../../videos/unwindlink.webm';

function Home() {

    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);


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
                                            <p className='home-intro-title'>
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
                                    <Col lg='8'>
                                        <div data-aos="fade-down" className='home-project-box'>
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
                                    <Col lg='4'>
                                        <div data-aos="fade-down" className='home-project-box'>
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
                            {/* DESIGN */}
                            <div className='project-section-one'>
                                <Row>
                                    <Col lg='4'>
                                        <div data-aos="fade-down" className='home-project-box'>
                                            <p className='project-design'>
                                                Design
                                            </p>
                                            <p className='project-design-info'>
                                                The design choice was straight forward, make it appealing
                                                to the eye and let the product do the talking. All thought 
                                                out to get the customer in and out with their new mattress. 
                                            </p>
                                        </div>
                                    </Col>
                                    <Col lg='8'>
                                    
                                    </Col>
                                </Row>
                                <div className='project-design-img-box'>
                                    <Row>
                                        <Col lg='4'>
                                            <div data-aos="fade-down" className='project-design-img-extra'>
                                                <img src={unwindpillow} />
                                            </div>
                                        </Col>
                                        <Col lg='4'>
                                            <div data-aos="fade-down" className='home-project-box'>
                                                <p className='project-design'>
                                                    Design
                                                </p>
                                                <p className='project-design-info'>
                                                    The design choice was straight forward, make it appealing
                                                    to the eye and let the product do the talking. All thought 
                                                    out to get the customer in and out with their new mattress. 
                                                </p>
                                            </div>
                                        </Col>
                                        <Col lg='2'>
                                        
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg='4'>
                                        
                                        </Col>
                                        <Col lg='4'>
                                            <div data-aos="fade-down" className='project-design-img'>
                                                <img src={unwindmattress} />
                                            </div>
                                        </Col>
                                        <Col lg='4'>
                                            <div data-aos="fade-down" className='home-project-box'>
                                                <p className='project-design'>
                                                    Design
                                                </p>
                                                <p className='project-design-info'>
                                                    The design choice was straight forward, make it appealing
                                                    to the eye and let the product do the talking. All thought 
                                                    out to get the customer in and out with their new mattress. 
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg='4'>
                                        
                                        </Col>
                                        <Col lg='4'>
                                        
                                        </Col>
                                        <Col lg='4'>
                                            <div data-aos="fade-down" className='project-design-img-two'>
                                                <img src={unwinddesk} />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className='project-section-one'>
                                <Row>
                                    <Col lg='8'>

                                    </Col>
                                    <Col lg='4'>
                                        <div className='home-project-box'>
                                            <p className='project-framework'>
                                                Frameworks
                                            </p>
                                            <p className='project-framework-info'>
                                                Using React with Node was a no brainer when dealing
                                                variants of products.  
                                            </p>
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
