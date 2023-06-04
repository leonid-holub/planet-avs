import style from "./Articles.module.scss";
import { useTranslation } from "react-i18next";
import PageInfo from "../../components/PageInfo/PageInfo";

const Articles = () => {
    const { t } = useTranslation();

return (
    <section className={style.articles}>
        <PageInfo>{t('articles.articles')}</PageInfo>
        <div className={`container ${style.articles__container}`}>
            <article className={style.article}>
                <h4 className={style.author}>Олександр Шупик</h4>
                <h3 className={style.title}>&quot;Ніхто не був готовий!&quot;</h3>
                <p className={style.paragraph}>Під час російської окупації у селищі Немішаєве не залишилось лікарів, згадує Олександр Шупик. А кількість поранених постійно зростала.</p>
                <video className={style.video} controls width="100%">
                    <source src="https://civilvoicesmuseum.org/up/103861/dY1ouBRK06XMbj61BZW96PO6HDO1t5VFQJcTSl4P.mp4" type="video/mp4"/>
                    Sorry, your browser doesn't support videos.
                </video>
            </article>
            <article className={style.article}>
                <h4 className={style.author}>PLANET AVS & CO</h4>
                <h3 className={style.title}>ПОВОДИР</h3>
                <p className={style.paragraph}>Короткометражний документальний фільм, заснований на реальних подіях, які відбувалися на території України під час антитерористичної операції на Донбасі.</p>
                <iframe className={style.video} src="https://www.youtube.com/embed/gc2_FMiyLv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="1"></iframe>
            </article>
            <article className={style.article}>
                <h4 className={style.author}>Thiernothilfe</h4>
                <h3 className={style.title}>Thiernothilfe Ukraine e.V.</h3>
                <p className={style.paragraph}>Міссія Миколаїв</p>
                <video controls width="100%" poster="/images/posters/thiernothilfe.jpg">
                    <source src="/videos/3 серія фінал.mp4" type="video/mp4"/>
                    Sorry, your browser doesn't support videos.
                </video>
            </article>
            <article className={style.article}>
                <h4 className={style.author}>PLANET AVS & CO</h4>
                <h3 className={style.title}>Робота з кіньми</h3>
                <p className={style.paragraph}></p>
                <video controls width="100%">
                    <source src="/videos/VID-20220624-WA0004.mp4" type="video/mp4"/>
                </video>
            </article>
            <article className={style.article}>
                <h4 className={style.author}>PLANET AVS & CO</h4>
                <h3 className={style.title}>Робота з кіньми</h3>
                <p className={style.paragraph}></p>
                <video controls width="100%" poster="/images/posters/horses.jpg" >
                    <source src="/videos/КОНІ.mp4" type="video/mp4"/>
                </video>
            </article>
            <article className={style.article}>
                <h4 className={style.author}>PLANET AVS & CO</h4>
                <h3 className={style.title}>Ветеринатори</h3>
                <p className={style.paragraph}></p>
                <video controls width="100%" poster="/images/posters/veterenatory.jpg">
                    <source src="/videos/3 серія фінал.mp4" type="video/mp4"/>
                    Sorry, your browser doesn't support videos.
                </video>
            </article>
        </div>
    </section>
);
};

export default Articles;