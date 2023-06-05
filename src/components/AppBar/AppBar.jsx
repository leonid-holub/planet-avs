import { NavLink, Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import style from './AppBar.module.scss';
import { LanguagesSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import HoverMenuItem from "../HoverMenuItem/HoverMenuItem";

const AppBar = () => {
    const [bmIsOpen, setBmIsOpen] = useState(false);
    const [visibleHeader, setVisibleHeader] = useState();
    const { t } = useTranslation();
    const isDesktop = useMediaQuery({ minWidth: 1280 });

    const toggleBmIsOpen = () => {
        setBmIsOpen(!bmIsOpen);
    };

    useEffect(()=> {
        const element = document.querySelector('header');

        const Visible = function (target) {
        // Все позиции элемента
            const targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
        // Получаем позиции окна
            windowPosition = {
            top: window.pageYOffset,
            bottom: window.pageYOffset + document.documentElement.clientHeight
            };

            if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
                targetPosition.top < windowPosition.bottom) // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден сниз
                {
                    // Если элемент полностью видно, то запускаем следующий код
                    setVisibleHeader(true);
                    console.log('Вы видите элемент :)');
                } else {
                    // Если элемент не видно, то запускаем этот код
                    setVisibleHeader(false);
                    console.log('invisible');
                };
        };

        window.addEventListener('scroll', function() {
            Visible (element);
        });

        Visible (element);
    })

    return (
        <header className={style.header}>
            <div className={visibleHeader ? style['header__wrapper-visible'] : style['header__wrapper-invisible']}>
                <div  className={`${style.header__container} container`}>
                        <div className={style.logo}>
                            <Link to="/">
                                <img className={style.logo__img} src="images/logo/photo_2023-05-17_17-39-46-fotor-bg-remove.png" alt="horse"/>                   
                            </Link>
                        </div>
                        {isDesktop ? '' : <LanguagesSwitcher />}
                        {isDesktop ? <div className={style.navigation__wrapper}>
                        <nav className={style.nav}>
                            <ul className={style.list}>
                                <li className={style.item}>
                                    <NavLink className={style.link} to="history"><p className={style.paragraph}><Trans>{t('nav.history')}</Trans></p></NavLink>
                                </li>
                                <li className={style.item}>
                                    <NavLink className={style.link} to="membership"><p className={style.paragraph}>{t('nav.membership')}</p></NavLink>
                                </li>
                            </ul>    
                            <ul className={style.list}>
                                {/* <li className={style.item}>
                                    <NavLink className={style.link} to="insurance"><p className={style.paragraph}><Trans>{t('nav.insurance')}</Trans></p></NavLink>
                                </li>
                                <li className={style.item} >
                                    <HoverMenuItem linkStyle={style.link} paragraphStyle={style.paragraph} direction={"bottom"} label={'studying'} array={['bridle', 'grooming', 'laboratory_case', 'animal_care', 'diet']}/>
                                </li> */}
                            </ul>    
                            <ul className={style.list}>
                                {/* <li className={style.item}>
                                    <NavLink className={style.link} to="internship"><p className={style.paragraph}><Trans>{t('nav.internship')}</Trans></p></NavLink>
                                </li>
                                <li className={style.item} >
                                <HoverMenuItem linkStyle={style.link} paragraphStyle={style.paragraph} direction={"bottom"} label={'services'} array={['surgery', 'therapy', 'laboratory_research', 'vaccinations', 'ophthalmology', 'obstetrics', 'x_ray', 'bridle']}/>
                                </li> */}
                            </ul>
                            <ul className={style.list}>
                                <li className={style.item}>
                                    <NavLink className={style.link} to="articles"><p className={style.paragraph}><Trans>{t('nav.articles')}</Trans></p></NavLink>
                                </li>
                                <li className={style.item}>
                                    <NavLink className={style.link} to="events"><p className={style.paragraph}><Trans>{t('nav.events')}</Trans></p></NavLink>
                                </li>
                            </ul>  
                        </nav> </div>:  ""}
                        {isDesktop ? <LanguagesSwitcher /> : ''}
                        {isDesktop ? '' : <div className={style.burger__wrapper}> <BurgerMenu.MenuButton toggleBmIsOpen={toggleBmIsOpen}  bmIsOpen={bmIsOpen}/> <BurgerMenu.MenuModal bmIsOpen={bmIsOpen} setBmIsOpen={setBmIsOpen}/> </div>}
                </div>
            </div>
        </header>
    )
} ;

export default AppBar;
