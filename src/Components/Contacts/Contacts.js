import React from 'react'
import './Contacts.css'
import './../Info/Info.css'
import {MDBIcon} from 'mdbreact';


class Contacts extends React.Component {
    render() {
        return (
            <div>
                <div className="container pt-0 h-100 pb-5">
                    <p className='pt-5 shop-logo-name my-3 my-sm-5 m-0 font-weight-bold w-100 text-center red-ic'>Contacts</p>
                    <div className="text-center h-100 black-text p-3">
                        <ul className="text-lg-left list-unstyled ml-0">
                            <li>
                                <p className="text-center contact-text">
                                    <MDBIcon icon="map-marker-alt" className="pr-3"/>
                                    USA, NEW YORK
                                </p>
                            </li>
                            <li>
                                <p className="text-center contact-text">
                                    <MDBIcon icon="clock" className="pr-3"/>
                                    Work hours: 09:00-20:00 MD-ST
                                </p>
                            </li>
                            <li>
                                <p className="text-center contact-text">
                                    <MDBIcon icon="phone" className="pr-3"/>
                                    +1 347 628 25 13
                                </p>
                            </li>
                            <li>
                                <p className="text-center contact-text">
                                    <i className="fas fa-envelope pr-3"></i>
                                    acesoft123@gmail.com
                                </p>
                            </li>
                        </ul>
                        <hr className="hr-light my-2 mt-0 mb-0 p-0"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;