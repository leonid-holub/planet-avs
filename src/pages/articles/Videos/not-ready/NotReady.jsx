import style from "./NotReady.module.scss";
import { useTranslation } from "react-i18next";
import PageInfo from "../../../../components/PageInfo/PageInfo";

const NotReady = () => {
    const { t } = useTranslation();

return (
    <section className={style.section}>
        <PageInfo>{t('articles.articles')}</PageInfo>
        <div className={"container"}>
        <article className={style.article}>
                <h4 className={style.author}>Олександр Шупик</h4>
                <h3 className={style.title}>&quot;Ніхто не був готовий!&quot;</h3>
                <p className={style.paragraph}>Під час російської окупації у селищі Немішаєве не залишилось лікарів, згадує Олександр Шупик. А кількість поранених постійно зростала.</p>
                <video className={style.video} controls width="100%">
                    <source src="https://civilvoicesmuseum.org/up/103861/dY1ouBRK06XMbj61BZW96PO6HDO1t5VFQJcTSl4P.mp4" type="video/mp4"/>
                    Sorry, your browser doesn't support videos.
                </video>
            </article>
        </div>
    </section>
    )
};

export default NotReady;