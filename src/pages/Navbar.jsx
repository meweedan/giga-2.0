import React, { Suspense , useState } from 'react'
import {Link} from 'react-scroll';
import Page from '../Page';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { t } = useTranslation();
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <React.Fragment key={"item.id"}>
    <header className="header-section two">
        <div className="header">
        <div className="header-bottom-area">
            <div className="container custom-container">
                <div className="header-menu-content">
                    <nav className="navbar navbar-expand-xl p-0">
                        <a className="site-logo site-title" href="/"><img src="/images/logo.png" width="63%" alt="giga-logo"/></a>
                        <Suspense>
                            <Page />
                        </Suspense>   
                        <button className="navbar-toggler d-block d-xl-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggle-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-start" id="navbarSupportedContent">
                            <ul className="navbar-nav main-menu" id="nav-list" key={"nav-main-menu"}>
                                    <li key="uniqueId"><Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={handleClick}>{t("about-us")}</Link></li>
                                    <li key="uniqueId2"><Link activeClass="active" to="plan" spy={true} smooth={true} offset={-100} duration={750} onClick={closeMenu}> {t("plans")}</Link></li>
                                <li className="menu_has_children" key="uniqueId1">                             
                                    <a href="#0">{t("business")}<i className="las la-angle-down"></i></a>
                                    <ul className="sub-menu" key={"sub-menu"}>
                                        <li key="uniqueId3"><Link activeClass="active" to="products" spy={true} smooth={true} offset={-100} duration={900} onClick={closeMenu}>{t("products")}</Link></li>
                                        <li key="uniqueId4"><Link activeClass="active" to="business" spy={true} smooth={true} offset={-100} duration={1100} onClick={closeMenu}>{t("corporate")}</Link></li>
                                    </ul>
                                </li>
                                <li key="uniqueId5"><Link activeClass="active" to="resellers" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>{t("resellers")}</Link></li>
                                <li key="uniqueId6"><Link activeClass="active" to="article" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>{t("news")}</Link></li>
                                <li key="uniqueId7"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>{t("contact-us")}</Link></li>
                                <li key="uniqueId8"><Link to="/careers">{t("careers")}</Link></li>
                        <p className="btn--base"><a href="https://giga.ly/portal">{t("login")}</a></p>              
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>                
        </div>
    </div>
    </header>
    </React.Fragment>
    )
} 

export default Navbar