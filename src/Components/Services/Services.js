 import React from 'react';
import './Services.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {MDBView} from 'mdbreact';
 import { Link } from 'react-router-dom';


const Services = () => {
    return (
        <div>
                   <div className="block m-0">
                       <div className='container w-100 text-center justify-content-center m-auto pb-5 p-0 px-sm-3'>
                         <div>
                             <p className='pt-5 shop-logo-name my-3 my-sm-5 m-0 font-weight-normal w-100 text-center font-weight-bold red-ic'>Prices</p>
                           <table className="table p-5 font-weight-bold">
                               <thead>
                               <tr>
                                   <th scope="col"></th>
                                   <th scope="col" className="light-green-ic font-weight-bolder px-1">Service</th>
                                   <th scope="col" className="light-green-ic font-weight-bolder px-1">Explanation</th>
                                   <th scope="col" className="light-green-ic font-weight-bolder px-1">Time period</th>
                                   <th scope="col" className="light-green-ic font-weight-bolder px-1">Coast</th>
                               </tr>
                               </thead>
                               <tbody>
                               <tr>
                                   <td className="font-weight-bold px-1">1</td>
                                   <td className="font-weight-bold px-1">Landing page</td>
                                   <td className="font-weight-bold px-1">Using CSS and HTML we will make pixel perfect layout design for you.</td>
                                   <td className="font-weight-bold px-1">1 week</td>
                                   <td className="font-weight-bold px-1">200 PDF</td>
                               </tr>
                               <tr>
                                   <td className="font-weight-bold px-1">2</td>
                                   <td className="font-weight-bold px-1">Web site</td>
                                   <td className="font-weight-bold px-1">Using CSS, HTML we will make for you web site.</td>
                                   <td className="font-weight-bold px-1">2 weeks</td>
                                   <td className="font-weight-bold px-1">1000 <i className='fas fa-pound-sign'></i></td>
                               </tr>
                               <tr>
                                   <td className="font-weight-bold px-1">3</td>
                                   <td className="font-weight-bold px-1">Web site (Wordpress)</td>
                                   <td className="font-weight-bold px-1">Using CSS, HTML, Wordpress we will make for you web site.</td>
                                   <td className="font-weight-bold px-1">2 weeks</td>
                                   <td className="font-weight-bold px-1">1000 <i className='fas fa-pound-sign'></i></td>
                               </tr>
                               <tr>
                                   <td className="font-weight-bold px-1" >4</td>
                                   <td className="font-weight-bold px-1">Web site (Figma)</td>
                                   <td className="font-weight-bold px-1">Using Figma we will make for you web site.</td>
                                   <td className="font-weight-bold px-1">1 week</td>
                                   <td className="font-weight-bold px-1">1000 <i className='fas fa-pound-sign'></i></td>
                               </tr>
                               </tbody>
                           </table>
                         </div>
                       </div>
                   </div>
        </div>
    )
};

export default Services;


