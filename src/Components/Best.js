import React from 'react'
import WorkerSlider from './WorkerSlider';
function Best() {
    return (
        <div>
            <section className="section section-doctor">
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-4">
                    <div className="section-header">
                    <h2>Book Best of the Best</h2>
                    <p>Lorem Ipsum is simply dummy text</p>
                    </div>
                    <div className="about-content">
                    <p>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum.
                    </p>
                    <p>
                        web page editors now use Lorem Ipsum as their default model
                        text, and a search for 'lorem ipsum' will uncover many web
                        sites still in their infancy. Various versions have evolved
                        over the years, sometimes
                    </p>
                    <a href="javascript:;">Read More..</a>
                    </div>
                </div>
                <div className="col-lg-8">
                        <WorkerSlider/>
                </div>
                </div>
            </div>
            </section>

        </div>
    )
}

export default Best
