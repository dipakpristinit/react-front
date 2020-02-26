import React, { Component } from 'react';
import logo from '../images/logo.png';

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="container">
            <div className="row">
                <div className="logo">
                    <a href="#" className="scrollto">
                        <div className="logo-box">
                            <img src={logo} alt="" className="img-fluid" />
                        </div>
                    </a>
                </div>
                <nav className="main-nav float-right d-none d-lg-block in ml-auto">
                    <ul>
                        <li className="active"><a href="#intro">Home</a>
                        </li>
                        <li className=""><a href="#konzept">Store</a>
                        </li>
                        <li><a href="#warum-bilogi">News</a>
                        </li>
                        <li><a href="#wie-bilogi">Knowledge</a>
                        </li>
                        <li><a href="#faqs">Contact</a>
                        </li>
                        <li><a href="#" className="login">Login</a>
                        </li>
                        <li><a href="#" className="cart"><span>3</span></a>
                        </li>
                        <li>
                            <a href="#" className="search"></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
  }
}
