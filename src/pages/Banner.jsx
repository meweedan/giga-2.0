import React from 'react'
import Hero from './Hero'
import { useTranslation } from 'react-i18next'; 

export default function Banner() {
    const { t } = useTranslation();

    return (
        <React.Fragment key={"item.id"}>        
            
<section className="banner-section two">
    <div className="banner-element-four">
        <img src="/images/element/element-50.png" alt="element"/>    
    </div>        
    <div className="banner-element-eightteen">        
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-55.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
    </div>
    <div className="banner-element-nineteen">
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-55.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
    </div>
    <div className="banner-element-twenty">    
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-55.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
    </div>
    <div className="banner-element-twenty-one">
        <img src="/images/element/element-6.png" alt="element"/>
    </div>
    <div className="banner-element-twenty-two">
        <img src="/images/element/element-55.png" alt="element"/>
    </div>
    <div className="banner-element-twenty">
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-55.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
    </div>
    <div className="banner-element-twenty-three">
        <img src="/images/element/element-55.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-55.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
    </div>
    <div className="banner-element-twenty-six">
        <img src="/images/element/element-40.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-55.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
        <img src="/images/element/element-50.png" alt="element"/>
    </div>
    
    <div className="container">
    <div className="row justify-content-center align-items-center mb-30-none"> 
    <h1>{t("Stay")} <b style={{color: "rgb(39,96,214)"}}>{t("Connected")}</b></h1></div>        
        <br/>
                <Hero/>
        </div>
</section>
        </React.Fragment> 
        )
    }
    