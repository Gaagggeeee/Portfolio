import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// STYLES 
import '../styles/work.css';

function Work() {
    return (
        <>
            <Container className='work-container' fluid={true}>
            {/* WORK TITLE */}
                <div className='work-title-wrapper'>
                    <div className='work-title-container'>
                        <Row>
                            <Col>
                                <div className='work-title-box'>
                                    <p>Archive</p>
                                    <p className='work-title-info'>A list of projects I've worked on</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                {/* PROJECTS TITLE */}
                <div className='work-projects-title-wrapper'>
                    <div className='work-projects-title-container'>
                        <Row>
                            <Col>
                                <table className='projects-table'>
                                    {/* TABLE TITLE */}
                                    <thead>
                                        <tr>
                                            <td className='table-title'>
                                                <p>Year</p>
                                            </td>
                                            <td className='table-title'>
                                                <p>Title</p>
                                            </td>
                                            <td className='table-title'>
                                                <p>Built with</p>
                                            </td>
                                            <td className='table-title'>
                                                <p>Links</p>
                                            </td>
                                        </tr>
                                    </thead>
                                    {/* TABLE BODY */}
                                    <tbody>
                                        {/* TABLE FIRST ROW */}
                                        <tr className='table-row'>
                                            <td>
                                                <p className='table-date'>2021</p>
                                            </td>
                                            <td>
                                                <p className='table-company'>Portfolio</p>
                                            </td>
                                            <td>
                                                <p className='frameworks'>React • CSS • SCSS • Bootstrap • React-Router • Netlify</p>
                                            </td>
                                            <td>
                                                <a className='table-website' href='#'>
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                                    </svg>
                                                </a>
                                                <a className='table-website-two' href='https://github.com/Gaagggeeee/Portfolio'>
                                                    <svg 
                                                        enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                        {/* TABLE SECOND ROW */}
                                        <tr className='table-row'>
                                            <td>
                                                <p className='table-date'>2021</p>
                                            </td>
                                            <td>
                                                <p className='table-company'>DGTL MLK</p>
                                            </td>
                                            <td>
                                                <p className='frameworks'>React • CSS • SCSS • Bootstrap • React-Router • PHP • Netlify</p>
                                            </td>
                                            <td>
                                                <a className='table-website' href='#'>
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                        {/* TABLE THIRD ROW */}
                                        <tr className='table-row'>
                                            <td>
                                                <p className='table-date'>2021</p>
                                            </td>
                                            <td>
                                                <p className='table-company'>Unwind Sleep</p>
                                            </td>
                                            <td>
                                                <p className='frameworks'>React • CSS • SCSS • Bootstrap • React-Router • Node • Storefront API • Shopify-buy • PHP • Netlify</p>
                                            </td>
                                            <td>
                                                <a className='table-website' href='https://www.unwindsleep.com/'>
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                        {/* TABLE FOURTH ROW */}
                                        <tr className='table-row'>
                                            <td>
                                                <p className='table-date'>2020</p>
                                            </td>
                                            <td>
                                                <p className='table-company'>MERN ecommerce</p>
                                            </td>
                                            <td>
                                                <p className='frameworks'>React • CSS • Bootstrap • Express • Node • MongoDB</p>
                                            </td>
                                            <td>
                                                <a className='table-website' href='https://www.unwindsleep.com/'>
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                        {/* TABLE FIFTH ROW */}
                                        <tr className='table-row'>
                                            <td>
                                                <p className='table-date'>2020</p>
                                            </td>
                                            <td>
                                                <p className='table-company'>Codepen Clone</p>
                                            </td>
                                            <td>
                                                <p className='frameworks'>React • CSS • Bootstrap</p>
                                            </td>
                                            <td>
                                                <a className='table-website' href='https://www.unwindsleep.com/'>
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                        {/* TABLE SIXTH ROW */}
                                        <tr className='table-row'>
                                            <td>
                                                <p className='table-date'>2020</p>
                                            </td>
                                            <td>
                                                <p className='table-company'>Google Keep Clone</p>
                                            </td>
                                            <td>
                                                <p className='frameworks'>React • CSS • Bootstrap • Firebase</p>
                                            </td>
                                            <td>
                                                <a className='table-website' href='https://www.unwindsleep.com/'>
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                        {/* TABLE SEVENTH ROW */}
                                        <tr className='table-row'>
                                            <td>
                                                <p className='table-date'>2020</p>
                                            </td>
                                            <td>
                                                <p className='table-company'>Gage Jr</p>
                                            </td>
                                            <td>
                                                <p className='frameworks'>Javascript</p>
                                            </td>
                                            <td>
                                                <a className='table-website' href='https://www.unwindsleep.com/'>
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                        {/* TABLE EIGTH ROW */}
                                        <tr className='table-row'>
                                            <td>
                                                <p className='table-date'>2020</p>
                                            </td>
                                            <td>
                                                <p className='table-company'>WRK.</p>
                                            </td>
                                            <td>
                                                <p className='frameworks'>React • CSS • Bootstrap • React Router </p>
                                            </td>
                                            <td>
                                                <a className='table-website' href='https://www.unwindsleep.com/'>
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                        {/* TABLE NINETH ROW */}
                                        <tr className='table-row'>
                                            <td>
                                                <p className='table-date'>2020</p>
                                            </td>
                                            <td>
                                                <p className='table-company'>Codepen Clone</p>
                                            </td>
                                            <td>
                                                <p className='frameworks'>React • CSS • Bootstrap</p>
                                            </td>
                                            <td>
                                                <a className='table-website' href='https://www.unwindsleep.com/'>
                                                    <svg 
                                                        xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>    
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Work;
