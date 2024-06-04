import React from 'react'
import './Cards.css'

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol} from 'mdbreact';


const Cards = () => {
    return (
      <div className='cards'>
          <div className='container p-0 pb-5'>
              <p className='shop-logo-name py-3 py-sm-5 font-weight-normal w-100 text-center font-weight-bold red-ic'>Work principles</p>
            <MDBRow className="d-flex m-auto align-content-center mb-5 w-100 mx-3 pt-0 display-3">
                <div className="card-group">
                    <div className="card p-3 m-2">
                        <img src={require("../../img/straw/pixelperfect.png")} className="card-img-top"
                             alt="Hollywood Sign on The Hill"/>
                        <div className="card-body px-0 px-sm-3">
                            <h5 className="card-title red-ic">Pixel perfect</h5>
                            <p className="card-text">
                                Pixel perfect design is one that provides the sharpest, cleanest and intentional looks due to the complete utilization of every pixel in the design.
                                A pixel perfect design is free of aberrations, undesired blurring, distortions and other design imperfections. Such flaws can arise in a website’s design or an app’s interface because of designing with various types of anti-aliasing and compression artifacts.
                            </p>
                        </div>
                    </div>
                    <div className="card p-3 m-2">
                        <img src={require("../../img/straw/software-entwickler-programmierer-programmieren-pizza.jpg")} className="card-img-top"
                             alt="Palm Springs Road"/>
                        <div className="card-body px-0 px-sm-3">
                            <h5 className="card-title red-ic">Clear code</h5>
                            <p className="card-text">The overarching goal when writing code is to make it easy to read and to understand. Well-written programs are easier to debug, easier to maintain, and have fewer errors. Writing a program is a lot like writing an essay. When writing an essay, your message is more convincing when it is accompanied by proper grammar and punctuation. When writing programs, you should follow the same principle.</p>
                        </div>
                    </div>
                    <div className="card p-3 m-2">
                        <img src={require("../../img/straw/12345.jpg")} className="card-img-top"
                             alt="Los Angeles Skyscrapers"/>
                        <div className="card-body px-0 px-sm-3">
                            <h5 className="card-title red-ic">Quality</h5>
                            <p className="card-text">
                                When I am talking about codding and creating landing pages, Quality become not only clear code and pixel perfect design, It is also fast task performance, low price, beautiful view. he quality of something is a the degree of excellence of something. To get the best result we will attract all our forces. The most important for us to meet your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </MDBRow>
          </div>
      </div>
    )
}

export default Cards;
