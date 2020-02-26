import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-6 col-12 footer-links">
                        <h5>About us</h5>
                        <p>There are many variations of passages of lorem ipsum is simply free text available but the ajority have suffered form by injected.</p>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6 col-12 footer-links">
                        <h5>Company</h5>
                        <ul>
                            <li><a href="#">Home</a>
                            </li>
                            <li><a href="#">About</a>
                            </li>
                            <li><a href="#">Locations</a>
                            </li>
                            <li><a href="#">Services</a>
                            </li>
                            <li><a href="#">Fleet Services</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6 col-12 footer-links">
                        <h5>Resources</h5>
                        <ul>
                            <li><a href="#">Reviews</a>
                            </li>
                            <li><a href="#">FAQs</a>
                            </li>
                            <li><a href="#">Contact Us</a>
                            </li>
                            <li><a href="#">Franchisee Login</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 footer-links">
                        <h5>get in touch</h5>
                        <ul className="address-block">
                            <li><span><i className="fa fa fa-map-marker"></i></span><a href="#"> 157 5th Avenue, 5471 NYC</a>
                            </li>
                            <li><span><i className="fa fa-phone"></i></span><a href="#"> (805) 123 456 789</a>
                            </li>
                            <li><span><i className="fa fa-phone"></i></span><a href="#"> (805) 223 456 978</a>
                            </li>
                            <li><span><i className="fa fa-at"></i></span><a href="#"> live-support@email.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container copy">
            <div className="row">
                <div className="col-lg-8 col-12">
                    <div className="copyright">Copyright &copy; 2020 Company Name. | All Rights Reserved</div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="social-links d-flex lg-right">
                        <a href="#" className="facebook">
                            <img src="images/payment.jpg" />
                        </a>
                        <a href="#" className="facebook">
                            <img src="images/payment.jpg"/>
                        </a>
                        <a href="#" className="facebook">
                            <img src="images/payment.jpg"/>
                        </a>
                        <a href="#" className="facebook">
                            <img src="images/payment.jpg"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
  }
}
