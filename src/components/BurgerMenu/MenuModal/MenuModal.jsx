import { NavLink } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

import style from "./MenuModal.module.scss"

const MenuModal = ({bmIsOpen, setBmIsOpen}) => {
const { t } = useTranslation()

    return (
        <>
        {bmIsOpen ? 
        <div className={`${style.menu} ${style.active}`} onClick={() => {setBmIsOpen(false)}}>
            <div className={style.blur}/>
                <div className={style.menu__content} onClick={e => e.stopPropagation()}>
                    <ul className={style.menu__list}>
                        <li className={style.menu__item}>
                            <NavLink className={style.link} to="history"><p className={style.paragraph}><Trans>{t('nav.history')}</Trans></p></NavLink>
                        </li>
                        <li className={style.menu__item}>
                            <NavLink className={style.link} to="membership"><p className={style.paragraph}>{t('nav.membership')}</p></NavLink>
                        </li>
                        <li className={style.menu__item}>
                            <NavLink className={style.link} to="insurance"><p className={style.paragraph}><Trans>{t('nav.insurance')}</Trans></p></NavLink>
                        </li>
                        <li className={style.menu__item}>
                            <NavLink className={style.link} to="studying"><p className={style.paragraph}><Trans>{t('nav.studying')}</Trans></p></NavLink> 
                        </li>
                        <li className={style.menu__item}>
                            <NavLink className={style.link} to="internship"><p className={style.paragraph}>{t('nav.internship')}</p></NavLink>
                        </li>
                        <li className={style.menu__item}>
                            <NavLink className={style.link} to="services"><p className={style.paragraph}><Trans>{t('nav.services')}</Trans></p></NavLink>
                        </li>
                        <li className={style.menu__item}>
                            <NavLink className={style.link} to="articles"><p className={style.paragraph}><Trans>{t('nav.articles')}</Trans></p></NavLink>
                        </li>
                        <li className={style.menu__item}>
                            <NavLink className={style.link} to="events"><p className={style.paragraph}><Trans>{t('nav.events')}</Trans></p></NavLink>
                        </li>
                    </ul> 
                </div>
        </div> : <div className={style.menu}>
            <div className={style.blur}/>
                <div className={style.menu__content}>
                    <ul className={style.menu__list}>
                        <li className={style.menu__item}>
                            <NavLink className={style.link} to="history"><p className={style.paragraph}><Trans>{t('nav.history')}</Trans></p></NavLink>
                        </li>
                        <li className={style.menu__item}>
                            <NavLink className={style.link} to="membership"><p className={style.paragraph}>{t('nav.membership')}</p></NavLink>
                        </li>
                        <li className={style.menu__item}>
                            <NavLink className={style.link} to="insurance"><p className={style.paragraph}><Trans>{t('nav.insurance')}</Trans></p></NavLink>
                        </li>
                        <li className={style.menu__item}>
                            <NavLink className={style.link} to="studying"><p className={style.paragraph}><Trans>{t('nav.studying')}</Trans></p></NavLink> 
                        </li>
                        <li className={style.menu__item}>
                            <NavLink className={style.link} to="internship"><p className={style.paragraph}>{t('nav.internship')}</p></NavLink>
                        </li>
                        <li className={style.menu__item}>
                            <NavLink className={style.link} to="services"><p className={style.paragraph}><Trans>{t('nav.services')}</Trans></p></NavLink>
                        </li>
                        <li className={style.menu__item}>
                            <NavLink className={style.link} to="articles"><p className={style.paragraph}><Trans>{t('nav.articles')}</Trans></p></NavLink>
                        </li>
                        <li className={style.menu__item}>
                            <NavLink className={style.link} to="events"><p className={style.paragraph}><Trans>{t('nav.events')}</Trans></p></NavLink>
                        </li>
                    </ul> 
                </div>
        </div>}
        </>
    );
};

export default MenuModal;