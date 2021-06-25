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
                                                A <span className='fls'>Full Stack Developer</span> <br />
                                                based in El Paso, Tx. <br />
                                            </p>
                                            <p className='home-intro-title'>
                                                Currently working at <br />
                                                <span className='fls'>DGTL MLK</span> designing <br />
                                                unforgettable sites.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>   
                    </Fade>
                    {/* WORK */}
                        <div className='home-work-wrapper'>
                            <div className='home-work-container'>
                                <Row>
                                    <Col>
                                        <div className='home-work-intro'>
                                            <p>WORK</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div data-aos="fade-down" className='home-work-box'>
                                            <Row>
                                                <Col lg='6'>
                                                    <div className='home-work-title'>
                                                        <p>Unwind Sleep</p>
                                                    </div>
                                                </Col>
                                                <Col lg='6'>
                                                    <div className='home-work-info'>
                                                       <p>
                                                            Mattress website built from React utilizing Shopify's Storefront 
                                                            API. Styled with CSS/SCSS and variant product retrieval with Node.
                                                       </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className='home-work-date/framework-box'>
                                                <Row className='home-work-row'>
                                                    <Col lg='6' className='home-work-col'>
                                                        <div className='home-work-date'>
                                                            <p className='date-title'>Date // <span className='date-info'>March - April 2021</span></p>
                                                        </div>
                                                        <div className='home-work-framework'>
                                                            <p>Frameworks // <span className='framework-info'>React, CSS/SCSS, Bootstrap, Shopify Storefront API, Node</span></p>
                                                        </div>
                                                    </Col>
                                                   <Col lg='6'>
                                                        
                                                   </Col>
                                                </Row>
                                            </div>
                                            <div className='home-work-design-box'>
                                                <Row>
                                                    <Col>
                                                        <div className='home-work-design'>
                                                            <p>Design</p>
                                                        </div>
                                                    </Col>
                                                    <Col>
                                                        <div className='design-info'>
                                                            <p>
                                                                The design choice was straight forward, make it appealing
                                                                to the eye and let the product do the talking. All thought 
                                                                out to get the customer in and out with their new mattress. 
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>            
                    {/* DESIGN */}
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

export default Home;
