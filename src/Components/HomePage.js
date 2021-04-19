import React from 'react'
import Header from "./HomeNav";
import HomeBanner from "./HomeBanner";
import Specialty from "./Specialty";
import SlickSlider from "./SlickSlider";
import Footer from "./Footer";
import Looking from "./Looking";
import Testimonial from "./Testimonial";

function HomePage(props) {
    return (
        <div class="main-wrapper">
        <Header becomeaworker={true} history={props.history}/>
        <HomeBanner history={props.history}/>
        <Specialty />
        <SlickSlider />
        <Looking />
        <Testimonial />
        <Footer />
      </div>
    )
}

export default HomePage
