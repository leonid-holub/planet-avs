import style from "./Horses1.module.scss";
import { useTranslation } from "react-i18next";
import PageInfo from "../../../../components/PageInfo/PageInfo";

const Horses1 = () => {
    const { t } = useTranslation();

return (
    <section className={style.section}>
        <PageInfo>{t('articles.articles')}</PageInfo>
        <div className={`container ${style.video__container}`}>
            <article className={style.article}>
                <h4 className={style.author}>PLANET AVS & CO</h4>
                <h3 className={style.title}>Робота з кіньми</h3>
                <p className={style.paragraph}></p>
                <video controls width="100%">
                    <source src="/videos/VID-20220624-WA0004.mp4" type="video/mp4"/>
                </video>
            </article>
        </div>
    </section>
    )
};

export default Horses1;
