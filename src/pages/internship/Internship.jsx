import style from "./Internship.module.scss";
import { useTranslation } from "react-i18next";

const Internship = () => {
    const { t } = useTranslation();

    return (
        <section className={style.internship}>
            <div className={`${style.container} ${style.internship__container}`}>
                <div className={style.internship__text}>
                    <h1 className={style.title}>{t('base.page')}</h1>
                    <p className={style.paragraph}>{t('internship.internship')}</p>
                </div>
                <div className={style.internship__wrapper}>
                    <img className={style.internship__img} src="/images/logo/horse-3.jpg" alt="paint horse" />
                </div>
            </div>
        </section>
    )
};

export default Internship;