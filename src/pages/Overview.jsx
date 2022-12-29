import React from 'react'
import { useTranslation } from 'react-i18next'; 

export default function Overview() {
    const { t } = useTranslation();

  return (
    <React.Fragment key={"item.id"}>
    <div className="container">
        <div className="about-area">
            <div className="row justify-content-center align-items-center mb-30-none">
                <div className="col-xl-6 col-lg-6 mb-30">
                    <div className="box-wrapper two">
                        <div className="box3">
                        <img src="/images/element/element-50.png" alt="element"/>
                        </div>
                        <div className="box1">
                            <div className="box-element-one">
                                <img src="/images/element/element-55.png" alt="element"/>
                                <img src="/images/element/element-50.png" alt="element"/>
                                <img src='/images/element/element-55.png' alt='element'/>
                                <img src="/images/element/element-50.png" alt="element"/>
                                <img src='/images/element/element-55.png' alt='element'/>
                            </div>
                            <div className="box-element-two">
                                <img src="/images/element/element-50.png" alt="element"/>
                                <img src="/images/element/element-50.png" alt="element"/>
                                <img src='/images/element/element-55.png' alt='element'/>
                            </div>
                            <div className="banner-element-ten">
                                <img src="/images/element/element-55.png" alt="element"/>
                                <img src="/images/element/element-50.png" alt="element"/>
                                <img src="/images/element/element-55.png" alt="element"/>
                                <img src="/images/element/element-50.png" alt="element"/>
                                <img src="/images/element/element-50.png" alt="element"/>
                            </div>
                            <div className="box-element-two">
                                <img src="/images/element/element-50.png" alt="element"/>
                                <img src='/images/element/element-55.png' alt='element'/>
                                <img src="/images/element/element-50.png" alt="element"/>
                                <img src='/images/element/element-55.png' alt='element'/>
                            </div>
                        </div>
                        <div className="box2">
                            <div className="box-element-five">
                                <img src="/images/element/element-50.png" alt="element"/>
                            </div>
                            <div className="banner-element-ten">
        <img src="/images/element/element-55.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-55.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
                            </div>                   
                            <div className="box-element-six">
                                <img src="/images/element/element-50.png" alt="element"/>
                            </div>
                            <div className="banner-element-ten">
        <img src="/images/element/element-55.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-55.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
    </div>
                        </div>
                    </div>
                    <div className="about-thumb">
                        <img src="/images/element/element-52.webp" alt="element"/>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 mb-30">
                    <div className="about-content">
                        
                        <h2 className="odo-title">{t("still_unconnected")}<br/><span className="text--base">{t("lets_handle")}</span></h2>
                        <p className="para"></p>
                        <p>{t("at_giga")}</p>
                        <div className="about-btn">
                            
                            <a href="contact.html" className="btn--base">{t("our_plans")}</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
