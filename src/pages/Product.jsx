import React from 'react'
import Products from '../hooks/Products'
import { useTranslation } from 'react-i18next';

export default function Product() {

  const { t } = useTranslation();

  
  return (
    <React.Fragment key={"item.id"}>
 <section className="banner-section two">
        <div className="plan-section ptb-120" id='product'>
        <div className="banner-element-eightteen">
                        <img src="/images/element/element-50.png" alt="element"/>
                        <img src="/images/element/element-55.png" alt="element"/>
                        <img src="/images/element/element-50.png" alt="element"/>
                        <img src="/images/element/element-55.png" alt="element"/>
                    </div>
    <div className="container">
        <div className="plan-tab">
            <div className="tab-content" id="nav-tabContent"> 
            <h2 className='title' style={{textAlign: "center"}}>{t("products")}</h2>
                <div className="tab-pane fade show active">
                    <div className="row justify-content-center mb-30-none">
                    <Products />
                    
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
