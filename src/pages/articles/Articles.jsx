import style from "./Articles.module.scss";
import { useTranslation } from "react-i18next";


const Articles = () => {
    const { t } = useTranslation();

return (
    <section className={style.articles}>
        <div className={`${style.container} ${style.articles__container}`}>
            <div className={style.articles__text}>
                <h1 className={style.title}>{t('base.page')}</h1>
                <p className={style.paragraph}>{t('articles.articles')}</p>
            </div>
            <div className={style.articles__wrapper}>
                <img className={style.articles__img} src="../../../public/images/logo/horse-3.jpg" alt="paint horse" />
            </div>
        </div>
    </section>
)
};

export default Articles;
