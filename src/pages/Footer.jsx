import React from 'react'

export default function Footer() {
  return (
    <React.Fragment>
        <footer className="footer-section two">
    <div className="footer-element-three">
        <img src="/images/element/element-40.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-55.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
    </div>
    <div className="footer-element-seven two">
       <img src="/images/element/element-7.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-55.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
    </div>
    <div className="footer-area ptb-120">
        <div className="footer-area-element">
            <img src="/images/element/element-57.webp" alt="element"/>
            <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-55.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        </div>
        <div className="container">
            <div className="footer-top-area">
                <div className="row mb-30-none">
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <ul className="footer-contact-list" key={"contact-us"}>
                                <li key="callus">
                                    <span className="sub-title">Call us</span>
                                    <h4 className="link-title"><a href="tel:00218217200200">+218 217 200 200</a></h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <ul className="footer-contact-list" key={"contact-list"}>
                                <li key="emailus">
                                    <span className="sub-title">Write to Us</span>
                                    <h4 className="link-title"><a href="mailto:support@giga.ly">support@giga.ly</a></h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <ul className="footer-contact-list" key={"office-hrs"}>
                                <li key="officehrs">
                                    <span className="sub-title">Office hours</span>
                                    <h4 className="link-title">Sat - Thu <br/>09:00 - 17:00</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-area">
                <div className="row mb-30-none">
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <h5 className="title">About us</h5>
                            <p>Giga was founded in 2011 by a group of innovation-focused individuals who wanted to uplift Libya's internet accessibility to keep up with a fastpaced world.</p>
                            <ul className="footer-social" key={"social"}>
                                <li key="facebook"><a href="#0"><i className="fab fa-facebook-f"></i></a></li>
                                <li key="twitr"><a href="#0"><i className="fab fa-twitter"></i></a></li>
                                <li key="ggl"><a href="#0"><i className="fab fa-google-plus-g"></i></a></li>
                                <li key="insta"><a href="#0"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 mb-30">
                        <div className="footer-widget">
                            <h4 className="title">Explore Giga</h4>
                            <ul className="footer-list" key={"login-footer"}>
                                <li key="acc"><a href="#0">Login</a></li>
                                <li key="privacy"> <a href="#0">Privacy Policy</a></li>
                                <li key="afil"><a href="#0">Affilitate</a></li>
                                <li key="prgrm"><a href="#0">Program</a></li>
                                <li key="prtnr"><a href="#0">Our Partner</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 mb-30">
                        {/*  */}
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <h5 className="title">Sign up to our newsletter</h5>
                            <form className="footer-subscribe-form">
                                <input type="email" className="form--control" placeholder="Enter Mail"/>
                                <button type="submit"><i className="las la-angle-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright-wrapper two">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-12 text-center">
                    <div className="copyright-area">
                        <div className="footer-logo">
                            <a className="site-logo site-title" href="index.html"><img src="/images/logo.png" alt="site-logo" width="50%"/></a>
                        </div>
                        <p>© Copyright 2022. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    </React.Fragment>
  )
}
