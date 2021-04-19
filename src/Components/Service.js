import React from "react";

function Service() {
  return (
    <div className="row">
      <div className="col-xl-9 col-lg-9 col-md-6 col-sm-12 col-xs-12 mx-auto">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div className="w-70 text-center">
              <img
                src="/assets/img/world.png"
                alt
                className="global-us w-50 img-thumbnail"
              />
              <p className="text-muted">Access a huge community of Buyers.</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div className="w-70 text-center">
              <img
                src="/assets/img/no-credit-card.png"
                alt
                className="global-us w-50 img-thumbnail"
              />
              <p className="text-muted">No Fee Charges</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div className="w-70 text-center">
              <img
                src="/assets/img/scam.png"
                alt
                className="global-us w-50 img-thumbnail"
              />
              <p className="text-muted">No Credit Card Scam</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div className="w-70 text-center">
              <img
                src="/assets/img/customer.png"
                alt
                className="global-us w-50 img-thumbnail"
              />
              <p className="text-muted">Good Customer Support!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
