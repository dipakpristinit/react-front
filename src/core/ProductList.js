import React, { Component } from 'react'

export default class ProductList extends Component {
  render() {
    return (
        <section className="section product-list">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Products For All Businesses</h2>
                    <p>Learn why we are trusted by over 35,000 clients worldwides</p>
                </div>
            </div>
            <div className="row list-row">
                <div className="col-md-6 col-sm-6 col-lg-3">
                    <div className="plan">
                        <div className="price-cont">
                            <img src="./images/free.png" />
                            <h4>Free</h4>
                            <h3><span>$</span>19.99</h3>
                            <h5>30 Days</h5>
                        </div>
                        <ul>
                            <li>Up to 5 devices per user</li>
                            <li>1000+ HD channels</li>
                            <li>From US, Canada, UK, Latino, Germany, Nordic, Arabic, Israel, etc</li>
                            <li>All categories (Sports, Entertainment, News, Kids, etc)</li>
                            <li>VOD library over 5000 commercial-free movies and tv shows on demand</li>
                        </ul>
                        <div className="plan-btn"><a href="#" className="btn btn-purple">Select Plan</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3">
                    <div className="plan">
                        <div className="price-cont">
                            <img src="./images/business.png" />
                            <h4>Business</h4>
                            <h3><span>$</span>59.99</h3>
                            <h5>90 Days</h5>
                        </div>
                        <ul>
                            <li>Up to 5 devices per user</li>
                            <li>1000+ HD channels</li>
                            <li>From US, Canada, UK, Latino, Germany, Nordic, Arabic, Israel, etc</li>
                            <li>All categories (Sports, Entertainment, News, Kids, etc)</li>
                            <li>VOD library over 5000 commercial-free movies and tv shows on demand</li>
                        </ul>
                        <div className="plan-btn"><a href="#" className="btn btn-purple">Select Plan</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3">
                    <div className="plan">
                        <div className="price-cont"> <span className="most-tag">Most Popular</span>
                            <img src="./images/unlimited.png" />
                            <h4>Unlimited</h4>
                            <h3><span>$</span>99.99</h3>
                            <h5>180 Days</h5>
                        </div>
                        <ul>
                            <li>Up to 5 devices per user</li>
                            <li>1000+ HD channels</li>
                            <li>From US, Canada, UK, Latino, Germany, Nordic, Arabic, Israel, etc</li>
                            <li>All categories (Sports, Entertainment, News, Kids, etc)</li>
                            <li>VOD library over 5000 commercial-free movies and tv shows on demand</li>
                        </ul>
                        <div className="plan-btn"><a href="#" className="btn btn-purple">Select Plan</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-3">
                    <div className="plan">
                        <div className="price-cont">
                            <img src="./images/premium.png" />
                            <h4>Premium</h4>
                            <h3><span>$</span>129.99</h3>
                            <h5>365 Days</h5>
                        </div>
                        <ul>
                            <li>Up to 5 devices per user</li>
                            <li>1000+ HD channels</li>
                            <li>From US, Canada, UK, Latino, Germany, Nordic, Arabic, Israel, etc</li>
                            <li>All categories (Sports, Entertainment, News, Kids, etc)</li>
                            <li>VOD library over 5000 commercial-free movies and tv shows on demand</li>
                        </ul>
                        <div className="plan-btn"><a href="#" className="btn btn-purple">Select Plan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
