import React from 'react'

import {MDBBtn, MDBCard, MDBNavItem} from "mdbreact";
import './Info.css'

import {Link} from 'react-router-dom'



const Info = () => {
    return (
         <div className="info-block">
             <div
                 className='w-100'>
                        <div className='text-white h-100 text-center d-flex flex-column align-items-center py-3 py-sm-5 p-0  px-sm-3 w-100'>
                            <div className='m-0 text-left black-ic'>
                                <p className='shop-logo-name m-0 w-100 red-ic font-weight-bold'>Layout design</p>
                            </div>
                            <div className='m-0 text-left black-ic py-5'>
                                <img className="logo-responsive" src={require("../../img/straw/123.jpg")} />
                            </div>
                            <div className='pt-4 w-75 m-0 justify-content-center text-black'>
                                <p className='shop-logo-text-name m-0 w-100 black-ic font-weight-bold green-ic'> It's a fundamental part of any piece of visual communication. Layout design is important for any project that visualise all needed information to describe business environment. Layout design is a fundamental branch of graphic design that concerns the arrangement of text and visuals. The effectiveness of every type of design, from print to web, is largely influenced by layout. An effective layout not only looks attractive, but also helps the viewer understand the message the design is conveying.</p>
                            </div>
                        </div>
                 </div>
         </div>
    );
}

export default Info;























