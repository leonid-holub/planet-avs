import style from "./Studying.module.scss";
import { useTranslation } from "react-i18next";

const Studying = () => {
    const { t } = useTranslation();

    return (
        <section className={style.studying}>
            <div className={`${style.container} ${style.studying__container}`}>
                <div className={style.studying__text}>
                    <h1 className={style.title}>{t('base.page')}</h1>
                    <p className={style.paragraph}>{t('studying.studying')}</p>
                </div>
                <div className={style.studying__wrapper}>
                    <img className={style.studying__img} src="images/logo/horse-3.jpg" alt="paint horse" />
                </div>
            </div>
        </section>
    )
};

export default Studying;