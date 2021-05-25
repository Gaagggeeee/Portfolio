import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// STLYES

import '../styles/background.css';

function Background() {
    return (
        <>
            <Container className='background-container' fluid={true}>
                <Row>
                    <Col className='background-col' xs='4'>
                        <div className='background-one'>
                    
                        </div>
                    </Col>
                    <Col className='background-col' xs='8'>
                        <div className='background-two'>
                    
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Background;
