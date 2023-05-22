import style from "./Insurance.module.scss";
import { useTranslation } from "react-i18next";

const Insurance = () => {
    const { t } = useTranslation();

    return (
        <section className={style.insurance}>
            <div className={`${style.container} ${style.insurance__container}`}>
                <div className={style.insurance__text}>
                    <h1 className={style.title}>{t('base.page')}</h1>
                    <p className={style.paragraph}>{t('insurance.insurance')}</p>
                </div>
                <div className={style.insurance__wrapper}>
                    <img className={style.insurance__img} src="images/logo/horse-3.jpg" alt="paint horse" />
                </div>
            </div>
        </section>
    )
};

export default Insurance;