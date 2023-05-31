import style from "./Articles.module.scss";
import { useTranslation } from "react-i18next";
import { Player } from 'video-react';

const Articles = () => {
    const { t } = useTranslation();

return (
    <section className={style.articles}>
        <div className={`container ${style.articles__container}`}>
            <div className={style.articles__text}>
                <h1 className={style.title}>{t('base.page')}</h1>
                <p className={style.paragraph}>{t('articles.articles')}</p>
            </div>
            <div className={style.articles__wrapper}>
                <img className={style.articles__img} src="images/logo/horse-3.jpg" alt="paint horse" />
            </div>
        </div>
        <video controls width="1200px">
                <source src="https://civilvoicesmuseum.org/up/103861/dY1ouBRK06XMbj61BZW96PO6HDO1t5VFQJcTSl4P.mp4" type="video/mp4"/>
                Sorry, your browser doesn't support videos.
        </video>
    </section>
);
};

export default Articles;
