import React from 'react'
// import Brands from '../hooks/Brands'
import { useTranslation } from 'react-i18next'; 

export default function Brand() {
    const { t } = useTranslation();

    return (
    <React.Fragment>
        <h2 className='title' style={{textAlign:"center"}}>{t("our_partners")}</h2>
            <div className="brand-banner">
                {/* <Brands /> */}
                <img src="/images/brand/cambium.jpeg"/>   
                <img src="/images/brand/ubiquiti.png" />             
                <img src="/images/brand/VIASAT.png" />
                <img src="/images/brand/cisco.png" />
                <img src="/images/brand/rfelements.jpeg" />                
                <img src="/images/brand/TELENOR.png" />
                <img src="/images/brand/tp-link.png" />
                <img src="/images/brand/hughes.png" />
                <img src="/images/brand/inmarsat.png" />
                <img src="/images/brand/mimosa.png" />
            </div>
    </React.Fragment>
        )
    }
    