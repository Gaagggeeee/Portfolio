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
                                        <p className='home-intro-title'>
                                            Hello!
                                        </p>
                                        <p className='home-intro-info'>
                                            My name is Gage Everett I'm a Full Stack Developer located in El 
                                            Paso, TX I build impressive and design websites, intriguing applications
                                            
                                        </p>
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
                                        <p className='home-project-title'>Projects</p>
                                        <p className='home-project-info'>Selected projects</p>
                                    </div>
                                </Col>
                            </Row>
                        {/* ARCHIVED */}
                        <Row>
                            <Col>
                                <div className='home-selected-projects'>

                                </div>
                            </Col>
                        </Row>
                        {/* ARCHIVED */}
                            <Row>
                                <Col lg='4'>
                                    <div className='home-project-card-container'>
                                            <a className='home-project-link'>
                                                <div className='home-project-link-inner'>
                                                    <span>
                                                    <svg 
                                                        version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                                            viewBox="0 0 512.001 512.001" >
                                                            <g>
                                                                <g>
                                                                    <path d="M448.916,118.259h-162.05c-6.578,0-13.003-2.701-17.44-7.292l-50.563-53.264c-12.154-12.115-28.783-18.443-45.625-18.346
                                                                        H63.084C28.301,39.356,0,67.657,0,102.439v307.123c0,34.783,28.301,63.084,63.084,63.084h386.064h0.058
                                                                        c34.764-0.154,62.949-28.59,62.794-63.277V181.342C512,146.559,483.699,118.259,448.916,118.259z M473.417,409.447
                                                                        c0.058,13.504-10.88,24.558-24.307,24.616H63.084c-13.504,0-24.5-10.996-24.5-24.5V102.439c0-13.504,10.996-24.5,24.5-24.52
                                                                        H173.74c0.212,0,0.424,0,0.637,0c6.443,0,12.694,2.566,16.899,6.733l50.293,53.013c11.806,12.192,28.32,19.176,45.297,19.176
                                                                        h162.05c13.504,0,24.5,10.996,24.5,24.5V409.447z"/>
                                                                </g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    <span className='home-project-link-inner-title'>Unwind Sleep</span>
                                                    <p className='home-project-link-inner-info'>
                                                        Mattress website made with React and Node utilizing Shopify's storefront API.
                                                        Multiple product variant display, saves to Shopify's checkout for analytics, 
                                                        
                                                    </p>
                                                    <p className='home-project-link-inner-lang'>
                                                        React • Shopify-buy • Node • SCSS
                                                    </p>
                                                </div>
                                            </a>
                                    </div>
                                </Col>
                                <Col lg='4'>
                                    <div className='home-project-card-container'>
                                            <a className='home-project-link'>
                                                <div className='home-project-link-inner'>
                                                    <span>
                                                    <svg 
                                                        version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                                            viewBox="0 0 512.001 512.001" >
                                                            <g>
                                                                <g>
                                                                    <path d="M448.916,118.259h-162.05c-6.578,0-13.003-2.701-17.44-7.292l-50.563-53.264c-12.154-12.115-28.783-18.443-45.625-18.346
                                                                        H63.084C28.301,39.356,0,67.657,0,102.439v307.123c0,34.783,28.301,63.084,63.084,63.084h386.064h0.058
                                                                        c34.764-0.154,62.949-28.59,62.794-63.277V181.342C512,146.559,483.699,118.259,448.916,118.259z M473.417,409.447
                                                                        c0.058,13.504-10.88,24.558-24.307,24.616H63.084c-13.504,0-24.5-10.996-24.5-24.5V102.439c0-13.504,10.996-24.5,24.5-24.52
                                                                        H173.74c0.212,0,0.424,0,0.637,0c6.443,0,12.694,2.566,16.899,6.733l50.293,53.013c11.806,12.192,28.32,19.176,45.297,19.176
                                                                        h162.05c13.504,0,24.5,10.996,24.5,24.5V409.447z"/>
                                                                </g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    <span className='home-project-link-inner-title'>Unwind Sleep</span>
                                                    <p className='home-project-link-inner-info'>
                                                        Mattress website made with React and Node utilizing Shopify's storefront API.
                                                        Multiple product variant display, saves to Shopify's checkout for analytics, 
                                                        
                                                    </p>
                                                    <p className='home-project-link-inner-lang'>
                                                        React • Shopify-buy • Node • SCSS
                                                    </p>
                                                </div>
                                            </a>
                                    </div>
                                </Col>
                                <Col lg='4'>
                                <div className='home-project-card-container'>
                                            <a className='home-project-link'>
                                                <div className='home-project-link-inner'>
                                                    <span>
                                                    <svg 
                                                        version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                                            viewBox="0 0 512.001 512.001" >
                                                            <g>
                                                                <g>
                                                                    <path d="M448.916,118.259h-162.05c-6.578,0-13.003-2.701-17.44-7.292l-50.563-53.264c-12.154-12.115-28.783-18.443-45.625-18.346
                                                                        H63.084C28.301,39.356,0,67.657,0,102.439v307.123c0,34.783,28.301,63.084,63.084,63.084h386.064h0.058
                                                                        c34.764-0.154,62.949-28.59,62.794-63.277V181.342C512,146.559,483.699,118.259,448.916,118.259z M473.417,409.447
                                                                        c0.058,13.504-10.88,24.558-24.307,24.616H63.084c-13.504,0-24.5-10.996-24.5-24.5V102.439c0-13.504,10.996-24.5,24.5-24.52
                                                                        H173.74c0.212,0,0.424,0,0.637,0c6.443,0,12.694,2.566,16.899,6.733l50.293,53.013c11.806,12.192,28.32,19.176,45.297,19.176
                                                                        h162.05c13.504,0,24.5,10.996,24.5,24.5V409.447z"/>
                                                                </g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    <span className='home-project-link-inner-title'>Unwind Sleep</span>
                                                    <p className='home-project-link-inner-info'>
                                                        Mattress website made with React and Node utilizing Shopify's storefront API.
                                                        Multiple product variant display, saves to Shopify's checkout for analytics, 
                                                        
                                                    </p>
                                                    <p className='home-project-link-inner-lang'>
                                                        React • Shopify-buy • Node • SCSS
                                                    </p>
                                                </div>
                                            </a>
                                    </div>
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
