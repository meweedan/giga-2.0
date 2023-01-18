import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

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
                                    <span className="sub-title">{t("Call_us")}</span>
                                    <h4 className="link-title"><a href="tel:00218217200200">+218 217 200 200</a></h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <ul className="footer-contact-list" key={"contact-list"}>
                                <li key="emailus">
                                    <span className="sub-title">ِ{t("Email_us")}</span>
                                    <h4 className="link-title"><a href="mailto:support@giga.ly">support@giga.ly</a></h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <ul className="footer-contact-list" key={"office-hrs"}>
                                <li key="officehrs">
                                    <span className="sub-title">{t("Office_hours")}</span>
                                    <h4 className="link-title">{t("Sat_Thu")}<br/>09:00 - 17:00</h4>
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
                                      <ul className="footer-social" key={"social"}>
                                          <li key="facebook"><a href="#0"><i className="fab fa-facebook-f"></i></a></li>
                                          <li key="twitr"><a href="#0"><i className="fab fa-twitter"></i></a></li>
                                          <li key="ggl"><a href="#0"><i className="fab fa-google-plus-g"></i></a></li>
                                          <li key="insta"><a href="#0"><i className="fab fa-instagram"></i></a></li>
                                      </ul>
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
