import React from 'react';
import './Jobs.css';
import './../Logo/Logo.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {MDBView, MDBCard} from 'mdbreact';
import { Parallax, Background } from 'react-parallax';


const Jobs = () => {
    return (

        <div>
            <MDBCard className='w-100'>
                    <div className='container text-center d-flex flex-column align-items-center p-0  px-0 w-100 pb-3 pb-sm-5'>
                        <div className='w-100 m-0 text-left black-ic'>
                            <p className='shop-logo-name mt-3 my-sm-5 m-0 font-weight-normal w-100 text-center red-ic font-weight-bold'>Our benefits</p>
                            <div className="d-inline-flex d-flex flex-wrap w-100 p-3">
                                <div className="p-3 col-12 col-lg-6 jobs-back w-responsive">
                                    <div>
                                        <img
                                            src={require('./../../img/straw/12345.jpg')}
                                            className="h-100 w-100"
                                        />
                                    </div>
                                    </div>
                                <div className="p-3 col-12 col-lg-6">
                                    <p className="font-weight-bold jobs-slogan">The best responsive design</p>
                                    <p className="jobs-text">From mobile browsers to netbooks and tablets, users are visiting your sites from an increasing array of devices and browsers. Are your designs ready? Learn how to think beyond the desktop and craft beautiful designs that anticipate and respond to your users’ needs. Ethan Marcotte will explore CSS techniques and design principles, including fluid grids, flexible images, and media queries, demonstrating how you can deliver a quality experience to your users no matter how large (or small) their display.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </MDBCard>
        </div>
    )
};

export default Jobs;

























