import React from 'react'
import { useTranslation } from 'react-i18next'; 

export default function Stats() {
    const { t } = useTranslation();

  return (
    <React.Fragment key={"item.id"}>
        <section className='banner-section two'>
        <div className="banner-element-twenty-one">
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-55.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-55.png" alt="element"/>
    </div>
      <div className="container">
        <div className="row justify-content-center mb-30-none">
            <div className="col-xl-6 col-lg-6 mb-30">
                <div className="statistics-left-content">
                    <h2 className="site-title">{t("stats")}</h2>
                    <p>Our motto, <i style={{color: "rgb(24,90,214)"}}>"Stay Connected"</i> includes the core values of the company and describes our philosophy. We moved heaven and earth to turn the company’s motto into a reality.</p>
                    <div className="statistics-left-btn">
                        <a href="about.html" className="custom-btn">Know More</a>
                    </div>
                </div>
            </div>
            
            <div className='col-xl-6 col-lg-6 mb-30'>
                <div className='statistics-item-area'>
                    <div className='row mb-30-none'>
                        <div className='col-xl-6 col-lg-6 col-md-6 mb-30'>
                            <div className='statistics-item'>
                                <div className='statistics-icon'>
                                    <img src="/images/icon/icon-8.png" alt="icon"/>
                                </div>
                                <div className='statistics-content'>
                                    <div className='odo-area'>
                                        <h3 className='odo-title odometer' data-odometer-final="11">11</h3>
                                        <h3 className="title">+</h3>
                                    </div>
                                    <p>{t("years")}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 mb-30'>
                            <div className='statistics-item'>
                                <div className='statistics-icon'>
                                    <img src="/images/icon/icon-9.png" alt="icon"/>
                                </div>
                                <div className='statistics-content'> 
                                    <div className='odo-area'>
                                        <h3 className='odo-title odometer' data-odometer-final="16">16</h3>
                                        <h3 className='title'>+</h3>
                                    </div>
                                    <p>{t("cities")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
     </React.Fragment>
     
  )
}