import React from 'react'
import { useTranslation } from 'react-i18next';

function Page() {
    const { i18n } = useTranslation();
  
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };
  
    return (
      <div className="App">
        <div className="App-intro">
          <div>
            <ul className='navbar-nav main-menu' key={"nav-lang"}>
            <li key={"ar"}><button className="btn" type="submit" onClick={() => changeLanguage('ar')}>
              🇱🇾
            </button></li>
            <li key={"en"}><button className="btn" type="submit" onClick={() => changeLanguage('en')}>
              🇬🇧 
            </button></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default Page;