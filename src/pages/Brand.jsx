import React from 'react'
import Brands from '../hooks/Brands'
import { useTranslation } from 'react-i18next'; 

export default function Brand() {
    const { t } = useTranslation();

    return (
    <React.Fragment>
        <h2 className='title' style={{textAlign:"center"}}>{t("our_partners")}</h2>
            <div className="brand-images">
                <Brands />
            </div>
    </React.Fragment>
        )
    }
    