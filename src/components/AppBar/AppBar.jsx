import { NavLink, Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import style from './AppBar.module.scss';
import { LanguagesSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import HoverMenuItem from "../HoverMenuItem/HoverMenuItem";

const AppBar = () => {
    const [bmIsOpen, setBmIsOpen] = useState(false);
    const { t } = useTranslation();
    const isDesktop = useMediaQuery({ minWidth: 1280 });

    const toggleBmIsOpen = () => {
        setBmIsOpen(!bmIsOpen);
    };

    return (
        <header className={style.header}>
            <div  className={`${style.header__container} container`}>
                <div className={style.header__top}>
                    <div className={style.logo}>
                        <Link to="/">
                            <img className={style.logo__img} src="images/logo/photo_2023-05-17_17-39-46-fotor-bg-remove.png" alt="horse"/>                   
                        </Link>
                    </div>
                    <LanguagesSwitcher />
                </div>
                <div className={style.navigation__wrapper}>
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
                            <li className={style.item} >
                                <HoverMenuItem linkStyle={style.link} paragraphStyle={style.paragraph} label={'studying'} array={['bridle', 'grooming', 'laboratory_case', 'animal_care', 'diet']}/>
                            </li>
                            <li className={style.item}>
                                <NavLink className={style.link} to="internship"><p className={style.paragraph}>{t('nav.internship')}</p></NavLink>
                            </li>
                            <li className={style.item} >
                            <HoverMenuItem linkStyle={style.link} paragraphStyle={style.paragraph} label={'services'} array={['surgery', 'therapy', 'laboratory_research', 'vaccinations', 'ophthalmology', 'obstetrics', 'x_ray', 'bridle']}/>
                            </li>
                            <li className={style.item}>
                                <NavLink className={style.link} to="articles"><p className={style.paragraph}><Trans>{t('nav.articles')}</Trans></p></NavLink>
                            </li>
                            <li className={style.item}>
                                <NavLink className={style.link} to="events"><p className={style.paragraph}><Trans>{t('nav.events')}</Trans></p></NavLink>
                            </li>
                        </ul>    
                    </nav> : <><BurgerMenu.MenuButton toggleBmIsOpen={toggleBmIsOpen}  bmIsOpen={bmIsOpen}/> <BurgerMenu.MenuModal bmIsOpen={bmIsOpen} setBmIsOpen={setBmIsOpen}/> </>}
                </div>
            </div>
        </header>
    )
} ;

export default AppBar;