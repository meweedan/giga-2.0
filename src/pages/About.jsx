import React from 'react';
import { useTranslation } from 'react-i18next'; 

export default function About() {
    const { t } = useTranslation();

     return (
        <React.Fragment>
    <div className="overview-element"  id='about'>
        <img src="/images/element/element-19.png" alt="element"/>
    </div>
    <div className="container">
        <div className='banner-element-eightteen'>
        <div className="row justify-content-center mb-30-none">
            <div className="col-xl-6 col-lg-6 mb-30">
                <div className="overview-thumb">
                    <img src="/images/element/element-77.webp" alt="element"/>
                    <div className="overview-thumb-element">
                        <img src="/images/element/element-62.png" alt="element"/>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-30">
                <div className="overview-content">
                    <h2>{t("business_connecting")}</h2>
                    <p>{t("motto")}</p>
                    <div className="overview-btn">
                        <a href="service.html" className="btn--base active">View All Services</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        </React.Fragment>
  )
}
