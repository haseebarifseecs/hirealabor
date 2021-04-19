import React from "react";

function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="large-container">
        <div className="sec-title">
          <span className="title">Hear From One of the Best!</span>
          <h2>What Our core client say ?</h2>
        </div>
        <div className="testimonial-carousel owl-carousel owl-theme">
          {/* Testimonial Block */}
          <div className="testimonial-block">
            <div className="inner-box">
              <div className="text">
                A domestic all-in-one hiring niche that accompanies daily
                domestic needs. A well needed initiative to help workers across
                Pakistan.
              </div>
              <div className="info-box">
                <div className="thumb">
                  <img
                    src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg"
                    alt
                  />
                </div>
                <h4 className="name">Mr Umer Ilyas</h4>
                <span className="designation">CEO UK Low Cost Startups</span>
              </div>
            </div>
          </div>
        </div>
        <div className="thumb-layer paroller">
          <figure className="image">
            <img
              src="http://t.commonsupport.com/adro/images/resource/user-thumbs.png"
              alt
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
