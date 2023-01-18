import React from 'react'
import Banners from '../hooks/Banners'

export default function Hero () {
  return (
    <div className="col-xl-12 mb-30">
        <div className="banner-content two">
            <div className="banner-content">
                <Banners />
            </div>
        </div>                
            <div className="app-images">
                <a href="https://apps.apple.com/bh/app/giga-net/id1510112243?l"><img src="/images/ios.webp" width={"70%"}  alt="ios app download"/></a>                
                <a href="/*Messenger link to be added*/"><img src="/images/messenger.png" alt="messenger chat download" width={"40%"} /></a>
                <a href="https://play.google.com/store/apps/details?id=com.giga.giganet"><img src="/images/android.png" alt="android app download"/></a>                    
            </div>
    </div>
  )
}
