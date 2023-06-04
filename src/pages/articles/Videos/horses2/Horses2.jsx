import style from "./Horses2.module.scss";
import { useTranslation } from "react-i18next";
import PageInfo from "../../../../components/PageInfo/PageInfo";

const Horses2 = () => {
    const { t } = useTranslation();

return (
    <section className={style.section}>
        <PageInfo>{t('articles.articles')}</PageInfo>
        <div className={"container"}>
            <article className={style.article}>
                <h4 className={style.author}>PLANET AVS & CO</h4>
                <h3 className={style.title}>Робота з кіньми</h3>
                <p className={style.paragraph}>Відеоблог з робочим викликом</p>
                <video controls width="100%" poster="/images/posters/horses.jpg" >
                    <source src="/videos/КОНІ.mp4" type="video/mp4"/>
                </video>
            </article>
        </div>
    </section>
    )
};

export default Horses2;
