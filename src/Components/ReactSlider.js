import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../Assets/css/react-slider-css.css';




  export const ReactSlider = (props) => {
    const fadeImages  = [
      props.imageOne,
      props.imageTwo,
      'https://mdbootstrap.com/img/new/slides/043.jpg'
    ];

    return (
        <div>
          <h2>Fade Effect</h2>
          <div className="slide-container">
            <Fade>
              <div className="each-fade">
                <div>
                  <img src={fadeImages[0]} />
                </div>
                <p>First Slide</p>
              </div>
              <div className="each-fade">
                <p>Second Slide</p>
                <div>
                  <img src={fadeImages[1]} />
                </div>
              </div>
              <div className="each-fade">
                <div>
                  <img src={fadeImages[2]} />
                </div>
                <p>Third Slide</p>
              </div>
            </Fade>
          </div>
        </div>
      );
    };
