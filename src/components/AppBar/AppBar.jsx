import { NavLink, Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

import style from './AppBar.module.scss';
import { LanguagesSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const AppBar = () => {
    const [bmIsOpen, setBmIsOpen] = useState(false);
    const { t } = useTranslation();
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768 });
    const isDesktop = useMediaQuery({ minWidth: 1280 });
    const isNotDesktop = useMediaQuery({ maxWidth: 1279 });

    const toggleBmIsOpen = () => {
        setBmIsOpen(!bmIsOpen);
    };

    return (
        <header className={style.header}>
            <div  className={`${style.header__container} container`}>
                <div className={style.logo}>
                    <Link to="/">
                        <img className={style.logo__img} src="images/logo/photo_2023-05-17_17-39-46-fotor-bg-remove.png" alt="horse"/>                   
                    </Link>
                </div>
                {isDesktop ? 
                <nav className={style.nav}>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <NavLink className={style.link} to="history"><p className={style.paragraph}><Trans>{t('nav.history')}</Trans></p></NavLink>
                        </li>
                        <li className={style.item}>
                            <NavLink className={style.link} to="membership"><p className={style.paragraph}>{t('nav.membership')}</p></NavLink>
                        </li>
                        <li className={style.item}>
                            <NavLink className={style.link} to="insurance"><p className={style.paragraph}><Trans>{t('nav.insurance')}</Trans></p></NavLink>
                        </li>
                        <li className={style.item}>
                            <NavLink className={style.link} to="studying"><p className={style.paragraph}><Trans>{t('nav.studying')}</Trans></p></NavLink> 
                        </li>
                        <li className={style.item}>
                            <NavLink className={style.link} to="internship"><p className={style.paragraph}>{t('nav.internship')}</p></NavLink>
                        </li>
                        <li className={style.item}>
                        <NavLink className={style.link} to="services"><p className={style.paragraph}><Trans>{t('nav.services')}</Trans></p></NavLink>
                        </li>
                        <li className={style.item}>
                            <NavLink className={style.link} to="articles"><p className={style.paragraph}><Trans>{t('nav.articles')}</Trans></p></NavLink>
                        </li>
                        <li className={style.item}>
                            <NavLink className={style.link} to="events"><p className={style.paragraph}><Trans>{t('nav.events')}</Trans></p></NavLink>
                        </li>
                    </ul>    
                </nav> : <> <LanguagesSwitcher /> <BurgerMenu.MenuButton toggleBmIsOpen={toggleBmIsOpen}  bmIsOpen={bmIsOpen}/> <BurgerMenu.MenuModal bmIsOpen={bmIsOpen} setBmIsOpen={setBmIsOpen}/> </>}
                {isDesktop ? <LanguagesSwitcher /> : ''}
            </div>
        </header>
    )
} ;

export default AppBar;