import React from 'react'
import Plans from '../hooks/Plans'
import { useTranslation } from 'react-i18next'; 

export default function Plan() {
    const { t } = useTranslation();

  return (
    <React.Fragment>
        <section className="banner-section two">
        <div className="plan-section ptb-120" id='plan'>
    <div className="container">
        <div className="plan-tab">
            <div className="tab-content" id="nav-tabContent"> 
            <h2 className='title' style={{textAlign: "center"}}>{t("our_plans")}</h2>
           
                <div className="tab-pane fade show active">
                    <div className="row justify-content-center mb-30-none">
                    <div className="banner-element-eightteen">
                        <img src="/images/element/element-50.png" alt="element"/>
                        <img src="/images/element/element-55.png" alt="element"/>
                        <img src="/images/element/element-50.png" alt="element"/>
                        <img src="/images/element/element-55.png" alt="element"/>
                    </div>
                            <Plans />
                            
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
