import style from "./Membership.module.scss";
import { useTranslation } from "react-i18next";

const Membership = () => {
    const { t } = useTranslation();

    return (
        <section className={style.membership}>
            <div className={`container ${style.membership__container}`}>
                <div className={style.membership__text}>
                    <h1 className={style.title}>{t('base.page')}</h1>
                    <p className={style.paragraph}>{t('membership.membership')}</p>
                </div>
                <div className={style.membership__wrapper}>
                    <img className={style.membership__img} src="images/logo/horse-3.jpg" alt="paint horse" />
                </div>
            </div>
        </section>
    )
};

export default Membership;