import React from 'react'
import './Footer.css'
import {MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavItem, MDBIcon, MDBNavbarNav} from 'mdbreact';
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';


class Footer extends React.Component {

    state = {
        collapseID: ''
    };

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    };

    render() {
        return (
            <Router>
            <MDBFooter className='font-small pt-4'>
                <MDBContainer fluid className='container pl-3 pl-sm-0 pr-sm-0 text-center text-md-left p-0'>
                    <MDBRow className='w-100 pt-4 px-0 px-sm-3 px-3 h-100'>
                        <MDBCol xl='4' lg='4' md="4" sm='4' className='col-6 p-lg-0 p-md-0 p-sm-0 p-0 m-0 mb-3'>
                            <div className='float-left d-block logo-block m-auto'>
                                <div>
                                    <img
                                        className='logo-img'
                                        src={require('./../../img/straw/default.png')}
                                        alt="fl1"
                                    />
                                </div>
                                <p className="logo-text pt-4">If you have some need to build beautifull, responsive,
                                    quality-oriented landing page or a website and mainly looking for help, our company
                                    is for you.</p>
                            </div>
                        </MDBCol>
                        <MDBCol xl='4' lg='4' md="4" sm='4'
                                className='col-6 pl-xl-5 p-lg-0 p-md-0 p-sm-0 pl-3 m-0 pb-5 mb-3'>
                            <h5 className='title footer-nav font-weight-normal pl-0 pl-sm-3 pl-md-5 pl-lg-5 pl-xl-5 text-left pt-1 py-2'>Navigation</h5>
                            <div className='pl-0 pl-sm-3 pl-md-5 pl-lg-5 pl-xl-5 text-left list-group'>
                                <MDBNavbarNav>
                                    <MDBNavItem className='py-2' active>
                                        <Link to='/' className=' font-weight-normal text-white'>Main</Link>
                                    </MDBNavItem>
                                    <MDBNavItem className='py-2'>
                                        <Link to='./services' className='font-weight-normal text-white'>Service</Link>
                                    </MDBNavItem>
                                    <MDBNavItem className='py-2'>
                                        <Link to='./contacts' className='font-weight-normal text-white'>Contacts</Link>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </div>
                        </MDBCol>
                        {/*<MDBCol xl='3' lg='3' md="4" sm='4' className='col-6 pl-xl-5 p-lg-0 p-md-0 pl-0 d-md-none d-sm-none m-0 d-lg-block d-xl-block '>*/}
                        {/*    <h5 className='title font-weight-normal footer-nav pl-md-5 ml-0 pl-lg-5 text-left w-100 float-left pt-1 py-2'>Information</h5>*/}
                        {/*    <ul className='pl-0'>*/}
                        {/*        <Link to='./Writetous' className="w-100 list-unstyled footer-nav pl-md-5 pl-lg-5 py-1 m-0 text-left float-left ">Write to us</Link>*/}
                        {/*    </ul>*/}
                        {/*</MDBCol>*/}
                        <MDBCol xl='4' lg='4' md="4" sm='4' className='col-6 p-lg-0 p-md-0 p-sm-0 p-0 pl-3 m-0'>
                            <h5 className='title font-weight-normal footer-nav pl-md-5 pl-2 ml-0 text-left w-100 float-left pt-1 py-2'>Contacts</h5>
                            <ul className='text-left pl-xl-4 pl-lg-5 pl-md-5 pl-sm-2 pl-2 ml-xl-4'>
                                <li className="list-unstyled py-1">
                                    <a href="https://www.google.com/search?rlz=1C1AVFC_enUA918UA918&tbm=lcl&ei=Hf3QX_CDBubLrgSi0pi4DQ&q=%D0%B4%D0%B0%D0%BD%D1%87%D0%B5%D0%BD%D0%BA%D0%B0+32&oq=%D0%B4%D0%B0%D0%BD%D1%87%D0%B5%D0%BD%D0%BA%D0%B0+32&gs_l=psy-ab.3..0l3j38l2j0i22i30k1l5.28.4097.0.6061.11.11.0.0.0.0.504.839.3-1j0j1.2.0....0...1c.1.64.psy-ab..9.2.838....0.uy_AembNmsI#rlfi=hd:;si:9998123447670742397;mv:[[50.49770037731904,30.440614033553217],[50.49734042268098,30.44004816644678]]"
                                       className='footer-items '>USA, NEW YORK</a>
                                </li>
                                <li className="list-unstyled py-1">
                                    <a href='tel:+15188709949' className='footer-items'>+1 347 628 25 13</a>
                                </li>
                                <li className="list-unstyled py-1">
                                    <a href='#' className='footer-items'>acesoft123@gmail.com</a>
                                </li>
                                <li className="list-unstyled py-1">
                                    <a href='#' className='text-right white-ic font-italic'>(Send request to our
                                        email)</a>
                                </li>
                                <li className="list-unstyled py-1">
                                    <a href="#!" className='footer-items'>Work hourse:</a>
                                </li>
                                <li className="list-unstyled py-1">
                                    <a href="#!" className='footer-items'>09:00-20:00 MD-SU</a>
                                </li>
                                {/*<MDBNavbarNav className="footer-ic mb-4 float-right d-inline-flex">*/}
                                {/*    <MDBNavItem  className='p-3' >*/}
                                {/*        <a href='https://www.facebook.com/yvonnemultibrands/?view_public_for=101844278443757' className='text-white' >*/}
                                {/*            <MDBIcon fab icon="facebook-f"  className="footer-icons"/>*/}
                                {/*        </a>*/}
                                {/*    </MDBNavItem>*/}
                                {/*    <MDBNavItem className='p-3' >*/}
                                {/*        <a href='https://www.instagram.com/yvonne__salon/?r=nametag'>*/}
                                {/*            <MDBIcon fab icon="instagram" className="footer-icons"/>*/}
                                {/*        </a>*/}
                                {/*    </MDBNavItem>*/}
                                {/*    <MDBNavItem  className='p-3' >*/}
                                {/*            <Link to='./Writetous' className="list-unstyled footer-nav white-ic m-0 ">*/}
                                {/*                <MDBIcon far icon="envelope" className="footer-icons"/>*/}
                                {/*            </Link>*/}
                                {/*    </MDBNavItem>*/}
                                {/*</MDBNavbarNav>*/}
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3 px-0 black-ic font-weight-bold">
                    <MDBContainer style={{textAlign: 'center'}}>
                        &copy;  Copyright {new Date().getFullYear()} <a className="salon black-ic font-weight-bold"
                                                                        href="https://www.mdbootstrap.com"> ZiSoft - All
                        Rights Reserved </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
            </Router>
        );
    }
}

export default Footer;
