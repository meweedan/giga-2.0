import React from 'react'
import Articles from '../hooks/Articles'
import { useTranslation } from 'react-i18next';

export default function Article() {

    const { t } = useTranslation();
    
  return (
    <React.Fragment>
<section className="gallery-section ptb-120">
    <div className="sorting-area"  id='article'>
      <h2 className='title'>{t("Articles")}</h2>
        <div className="row justify-content-center mb-60-none">
            <div className="col-xl-8 col-lg-8 mb-60">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mb-60">
                        <Articles />
                    </div>
            </div>
        </div>
    </div>
 </section> 
    </React.Fragment>
  )
}
