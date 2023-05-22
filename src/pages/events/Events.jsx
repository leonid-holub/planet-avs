import style from "./Events.module.scss";
import { useTranslation } from "react-i18next";

const Events = () => {
    const { t } = useTranslation();

    return (
        <section className={style.events}>
            <div className={`${style.container} ${style.events__container}`}>
                <div className={style.events__text}>
                    <h1 className={style.title}>{t('base.page')}</h1>
                    <p className={style.paragraph}>{t('events.events')}</p>
                </div>
                <div className={style.events__wrapper}>
                    <img className={style.events__img} src="../../../public/images/logo/horse-3.jpg" alt="paint horse" />
                </div>
            </div>
        </section>
    )
};

export default Events;