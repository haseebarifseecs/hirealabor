import React from 'react'
import WorkerNav from './WorkerNav'
import Jumbotron from './Jumbotron'
import Service from './Service'
import Testimonial from './Testimonial'
import Whyus from './Whyus'
import Us from './Us'
import HomeNav from './HomeNav'
import Footer from './Footer'
import '../Assets/css/join.css'

function BecomeaWorker() {
    return (
        <>
        <HomeNav/>
        <Jumbotron/>
        <Service/>
        <Whyus/>
        <Us/>
        <Testimonial/>
        <Footer/>
        </>
    )
}

export default BecomeaWorker
