import style from "./Events.module.scss";
import { useTranslation } from "react-i18next";
import PageInfo from "../../components/PageInfo/PageInfo";

const Events = () => {
    const { t } = useTranslation();

    return (
        <section className={style.events}>
            <PageInfo>{t('events.events')}</PageInfo>
            <div className={`container ${style.events__container}`}>
                <article className={style.article}>
                    <img className={style.img} src="/public/images/events/dog/dog-collage.jpg" alt="collage with photo of cured dog" width="600px"></img>
                    <div className={style.text}>
                        <h3 className={style.title}>Відновлення зору службовій собаці</h3>
                        <p className={style.paragraph}>Робота на кінологічному центрі Головного управління Національної поліції Київщини</p>
                    </div>
                </article>
            </div>
        </section>
    )
};

export default Events;