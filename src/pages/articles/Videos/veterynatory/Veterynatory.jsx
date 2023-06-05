import style from "./Veterynatory.module.scss";
import { useTranslation } from "react-i18next";
import PageInfo from "../../../../components/PageInfo/PageInfo";

const Veterynatory = () => {
    const { t } = useTranslation();

return (
    <section className={style.section}>
        <PageInfo>{t('articles.articles')}</PageInfo>
        <div className={`container ${style.video__container}`}>
            <article className={style.article}>
                <h4 className={style.author}>PLANET AVS & CO</h4>
                <h3 className={style.title}>Ветеринатори</h3>
                <p className={style.paragraph}></p>
                <video controls width="100%" poster="images/posters/veterenatory.jpg">
                    <source src="/videos/3 серія фінал.mp4" type="video/mp4"/>
                    Sorry, your browser doesn't support videos.
                </video>
            </article>
        </div>
    </section>
    )
};

export default Veterynatory;
