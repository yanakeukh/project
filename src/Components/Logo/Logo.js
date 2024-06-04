import React from 'react'
import './Logo.css'


const Logo = () => {
    return (
       <div className='shop-bg'>
        <div className='shop-bg-nav border-bottom z-depth-1' >
            <div className='container m-auto justify-content-center h-100 p-0'>
                <div className='h-100 pt-0 pt-md-5'>
                    <div className='w-100 d-inline-flex m-0 px-sm-3 px-3 mt-5 mt-md-3'>
                        <div className='d-inline-flex float-left p-0 p-sm-3'>
                                <img
                                    className='my-2 image-logo'
                                    src={require('../../img/straw/default.png')}
                                    alt='fl1'
                                />
                            <div className='m-0 text-left black-text py-md-3 py-sm-3 py-3'>
                           {/*<img className='w-100 logo-img py-md-3 py-2' src={require('../../img/')}/>*/}
                            </div>
                        </div>
                        <div className='float-right tell-info p-0 p-sm-0 ml-auto mr-0'>
                            <ul className='m-0 py-md-4 py-sm-4 py-2 px-0 mt-1 mt-sm-0'>
                                <li className="list-unstyled text-right py-0 py-sm-1 py-md-1">
                                    <a href='tel:+15188709949' className='logo-tell pink-text font-weight-bold text-right white-ic'>+1 347 628 25 13</a>
                                </li>
                                <li className="list-unstyled text-right py-0 py-sm-1 py-md-1">
                                    <a href='#' className='logo-tell font-weight-bold text-right white-ic'>acesoft123@gmail.com</a>
                                </li>
                                <li className="list-unstyled text-right py-0 py-sm-1 py-md-1">
                                    <a href='#' className='logo-tell text-right white-ic font-italic'>(send request to our email)</a>
                                </li>
                                <li className="list-unstyled text-right py-0 py-sm-1 py-md-1">
                                    <a href='#' className='logo-tell font-weight-bold text-right white-ic'>USA, NEW YORK</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="text-nowrap p-1 p-sm-2 slogan text-center font-weight-bold">PSD TO HTML</h1>
                            <h3 className="p-0 p-sm-0 slogan-text font-weight-bold text-center">We create responsive modern layout pages and web sites</h3>
                            <h5 className="slogan-text-slogan p-2 p-sm-4 w-50 white-ic w-100 text-center d-block">We provide service for different industries and make our service high quality focusing on high speed of performance of the set tasks.</h5>
                        </div>
                    </div>
                </div>
            </div>
          </div>
       </div>
    )
}

export default Logo;
