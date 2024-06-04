import React from 'react'
import './Paralax.css'
import { Parallax, Background } from 'react-parallax';

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol} from 'mdbreact';


const Paralax = () => {
    return (
        <Parallax
            bgImage={require('./../../img/straw/software-entwickler-programmierer-programmieren-pizza.jpg')}
        >
        <div className="d-block h-100">
               <div className='paralax d-block'>
                   <div className='container p-0 pb-5'>
                       <p className='shop-logo-name light-green-ic py-3 py-sm-5 font-weight-normal w-100 text-center font-weight-bold'>5 Layout Design Elements</p>
                          <p className="white-ic px-3 paralax-text">
                              <p><span className="yellow-ic font-weight-bold">Text:</span> Blocks of text in layout design include headlines, subheadings, headers, footers, and paragraphs. In web design, text will also include menus and buttons.</p>
                              <p><span className="light-green-ic font-weight-bold">Image:</span> Images in your graphic design can include photographs, illustrations, and infographics that become a part of your layout.</p>
                              <p><span className="orange-ic font-weight-bold">Line:</span> Line refers to the way that two points in space are connected. Whether they’re horizontal lines, diagonal lines, or vertical lines, lines can help direct the eye toward a certain point in your composition. </p>
                              <p><span className="blue-ic font-weight-bold">Shape:</span> In its most basic form, a shape is a two-dimensional area that is surrounded by an outline. There are three types of shapes: organic shapes which occur naturally in the world, geometric shapes which are angular and mathematically consistent, and abstract shapes that represent things in nature but aren’t perfectly representative.</p>
                              <p><span className="red-ic font-weight-bold">White space:</span> The blank space between elements in layout design can be as important as the visual elements themselves. The spacing around an element can draw attention to it and make it stand out.</p>
                          </p>
                    </div>
                </div>
        </div>
        </Parallax>
    )
}

export default Paralax;
