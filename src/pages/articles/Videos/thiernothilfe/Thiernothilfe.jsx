import style from "./Thiernothilfe.module.scss";
import { useTranslation } from "react-i18next";
import PageInfo from "../../../../components/PageInfo/PageInfo";

const Thiernothilfe = () => {
    const { t } = useTranslation();

return (
    <section className={style.section}>
        <PageInfo>{t('articles.articles')}</PageInfo>
        <div className={`container ${style.video__container}`}>
        <article className={style.article}>
                <h4 className={style.author}>Thiernothilfe Ukraine e.V.</h4>
                <h3 className={style.title}>Міссія Миколаїв</h3>
                <p className={style.paragraph}>Короткометражний документальний фільм</p>
                <video controls width="100%" poster="/images/posters/thiernothilfe.jpg">
                    <source src="/videos/3 серія фінал.mp4" type="video/mp4"/>
                    Sorry, your browser doesn't support videos.
                </video>
            </article>
        </div>
    </section>
    )
};

export default Thiernothilfe;