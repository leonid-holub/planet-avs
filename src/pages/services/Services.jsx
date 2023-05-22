import style from "./Services.module.scss";
import { useTranslation } from "react-i18next";

const Services = () => {
    const { t } = useTranslation();

    return (
        <section className={style.services}>
            <div className={`${style.container} ${style.services__container}`}>
                <div className={style.services__text}>
                    <h1 className={style.title}>{t('base.page')}</h1>
                    <p className={style.paragraph}>{t('services.services')}</p>
                </div>
                <div className={style.services__wrapper}>
                    <img className={style.services__img} src="images/logo/horse-3.jpg" alt="paint horse" />
                </div>
            </div>
        </section>
    )
};

export default Services;