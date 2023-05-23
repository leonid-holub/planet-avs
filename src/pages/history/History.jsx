import style from "./History.module.scss";
import { useTranslation } from "react-i18next";

const History = () => {
    const { t } = useTranslation();

return (
    <section className={style.history}>
        <div className={`container ${style.history__container}`}>
            <div className={style.history__text}>
                <h1 className={style.title}>{t('base.page')}</h1>
                <p className={style.paragraph}>{t('history.history')}</p>
            </div>
            <div className={style.history__wrapper}>
                <img className={style.history__img} src="images/logo/horse-3.jpg" alt="paint horse" />
            </div>
        </div>
    </section>
)
};

export default History;