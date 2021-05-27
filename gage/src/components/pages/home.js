import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// STYLES
import '../styles/home.css';

function Home() {
    return (
        <>
            <Container className='home-container' fluid={true}>
                <div className='home-intro-wrapper'>
                    <div className='home-intro-container'>
                        <Row>
                            <Col>
                                <div className='home-intro-box'>
                                    <p>Hi</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>    
            </Container> 
        </>
    )
}

export default Home
