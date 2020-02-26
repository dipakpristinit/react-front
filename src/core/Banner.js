import React from 'react';
import BannerImg from '../images/banner-img.png';

function Banner() {
  return (
    <section className="home-banner">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-6">
                    <h2>24 Hours Free Trails</h2>
                    <p className="large-m">Anytime, anywhere, any-screen access to your favorite HD content as low as 12.49 per month.</p> <a href="#" className="btn mr-3">Start Today</a>
                    <a href="#" className="btn btn-purple">Start Trial</a>
                </div>
                <div className="col-md-12 col-sm-12 col-lg-6">
                    <img src={BannerImg} className="main-bg-img" alt="home banner image" />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Banner;