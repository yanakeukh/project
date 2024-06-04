import React from 'react'
import './Block.css'
import './../Logo/Logo.css'

const Block = () => {
    return (
        <div className="partners">
            <div className='container m-auto justify-content-center p-0'>
                <div className='w-100 d-flex flex-wrap h-100'>
                    <p className='shop-logo-name my-3 my-sm-5 m-0 font-weight-normal w-100 text-center white-ic font-weight-bold'>Our service</p>
                    <div className='container p-0 pb-5'>
                        <div className='partn-block mb-xl-5 mb-lg-2 mb-md-0 mb-sm-0 mb-5 m-auto justify-content-center px-0 px-sm-3 d-flex flex-wrap'>
                              <div className='d-inline-flex'>
                                  <div className='px-3'>
                                      <div  className="text-center"><i className="fa fa-desktop p-1" aria-hidden="true"></i></div>
                                      <div className='partners-name font-weight-bold text-center p-md-2 p-0 py-3'>WE CREATE LANDING PAGES</div>
                                      <div className='text-center partners-name-text font-weight-bold'>Using innovative technology to create layout design we will do for you the best services.</div>
                                      <div className="p-3 text-center partners-name-text-explanation">We are making design using HTML, CSS.</div>
                                  </div>
                                  <div className='px-0 px-sm-5'>
                                      <div  className="text-center"><i className='fab fa-wordpress-simple text-center p-1 blue-ic partners-logo'></i></div>
                                      <div className='partners-name font-weight-bold text-center p-md-2 p-0 py-3'>WEB SITES (Wordpress, Figma)</div>
                                      <div className='text-center partners-name-text font-weight-bold'>Using the latest technologies we will be able to create for you fashionable web site.</div>
                                      <div className="p-3 text-center partners-name-text-explanation">We are planning to use Wordpress.</div>
                                  </div>
                              </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Block;
