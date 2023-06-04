import style from "./Guide.module.scss";
import { useTranslation } from "react-i18next";
import PageInfo from "../../../../components/PageInfo/PageInfo";

const Guide = () => {
    const { t } = useTranslation();

return (
    <section className={style.section}>
        <PageInfo>{t('articles.articles')}</PageInfo>
        <div className={"container"}>
        <article className={style.article}>
                <h4 className={style.author}>PLANET AVS & CO</h4>
                <h3 className={style.title}>ПОВОДИР</h3>
                <p className={style.paragraph}>Короткометражний документальний фільм, заснований на реальних подіях, які відбувалися на території України під час антитерористичної операції на Донбасі.</p>
                <iframe className={style.video} src="https://www.youtube.com/embed/gc2_FMiyLv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="1"></iframe>
            </article>
        </div>
    </section>
    )
};

export default Guide;