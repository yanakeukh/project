import React from 'react';

import {  MDBRow,  MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

import './Writetous.css'

class Writetous extends React.Component {

    state = {
        form: {
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
            'send-telegram':1,
        },
        alert: ''
    }

    initial_state = {
        form: {
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
            'send-telegram':1,
        },
        alert: ''
    }

    changeInputHandler = (event) => {
        let formData = {...this.state.form}
        formData[event.target.name] = event.target.value
        this.setState({form: formData})
    }

    formSubmit = () => {

        if (this.state.form.name.trim() === '') {
            this.setState({alert: 'Введіть ім`я!'})
            return false
        }
        if (this.state.form.email.trim() === '') {
            this.setState({alert: 'Введіть email!'})
            return false
        }

        let url = 'http://yvonne.com.ua/telegram/'
        fetch(url, {
            method: 'POST', // или 'PUT'
            body: new URLSearchParams(this.state.form).toString(), // данные могут быть 'строкой' или {объектом}!
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            if (data.ok) {
                this.setState({form:this.initial_state.form, alert: 'Massage send!'})
            }
        });
    }


    render() {
        return (
            <div>
                <div className='container  justify-content-center m-auto pb-5 contacts px-1'>
                    <div className='price w-100 m-auto justify-content-center'>
                        <p className='shop-logo-name my-3 my-sm-5 m-0 font-weight-normal w-100 text-center'>Contact form</p>
                        <MDBCard className='col-xl-8 col-lg-8  px-0 px-sm-3 m-auto justify-content-center contact-card'>
                            <MDBRow className='pt-0 px-0 px-sm-3 w-100'>
                                <div xl="6" className='w-100'>
                                    <MDBCardBody className="form px-0 px-sm-3 w-100">
                                        <p className='text-center contact-text'>
                                            <MDBIcon icon="envelope" className="pr-2 pt-3" />
                                            Write to us:
                                        </p>
                                        <p className='px-3' style={{color:'green'}}>{this.state.alert}</p>
                                        <div className='d-inline-flex w-100'>
                                            <div className='w-50 h-100 col-contact px-3'>
                                                <div className=" mb-0 mt-2 px-2">
                                                    <MDBInput
                                                        type="text"
                                                        id="form-contact-name"
                                                        label="Name"
                                                        name="name"
                                                        value={this.state.form.name}
                                                        onChange={this.changeInputHandler}
                                                    />
                                                </div>
                                            </div>
                                            <div className='w-50 h-100 col-contact px-3'>
                                                <div className="md-form mb-0 mt-2 px-2">
                                                    <MDBInput
                                                        type="text"
                                                        id="form-contact-email"
                                                        label="Email"
                                                        name="email"
                                                        value={this.state.form.email}
                                                        onChange={this.changeInputHandler}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-inline-flex w-100'>
                                            <div className='w-50 h-100 col-contact px-3'>
                                                <div className=" mb-0 mt-2 px-2">
                                                    <MDBInput
                                                        type="text"
                                                        id="form-contact-phone"
                                                        label="Mobile phone"
                                                        name="phone"
                                                        value={this.state.form.phone}
                                                        onChange={this.changeInputHandler}
                                                    />
                                                </div>
                                            </div>
                                            <div className='w-50 h-100 col-contact px-3'>
                                                <div className="md-form mb-0 mt-2 px-2">
                                                    <MDBInput
                                                        type="text"
                                                        id="form-contact-company"
                                                        label="Your company"
                                                        name="company"
                                                        value={this.state.form.company}
                                                        onChange={this.changeInputHandler}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='px-3'>
                                            <div md="12">
                                                <div className="md-form mb-0 px-2">
                                                    <MDBInput
                                                        type="textarea"
                                                        id="form-contact-message"
                                                        label="Message"
                                                        name="message"
                                                        value={this.state.form.message}
                                                        onChange={this.changeInputHandler}
                                                    />
                                                    <MDBBtn onClick={this.formSubmit} rounded color="light-green" className='mb-3 justify-content-center m-auto d-block'>
                                                        Send
                                                    </MDBBtn>
                                                </div>
                                            </div>
                                        </div>
                                    </MDBCardBody>
                                </div>
                            </MDBRow>
                        </MDBCard>
                    </div>
                </div>
            </div>
        )
    }
};

export default Writetous;