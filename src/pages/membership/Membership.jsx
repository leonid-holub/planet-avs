import style from "./Membership.module.scss";
import { useTranslation } from "react-i18next";
import PageInfo from "../../components/PageInfo/PageInfo";


const Membership = () => {
    const { t } = useTranslation();

    return (
        <section className={style.membership}>
            <PageInfo>
                {t('membership.membership')}
            </PageInfo>
            <div className={`container ${style.membership__container}`}>
                <h2 className={style.title}>{t('membership.title.0')}</h2>
                <ol className={style.membership__list}>
                    <li className={style.membership__item}><h3 className={style.item__title}>{t('membership.first')}</h3></li>
                    <li className={style.membership__item}><h3 className={style.item__title}>{t('membership.second')}</h3></li>
                    <li className={style.membership__item}><h3 className={style.item__title}>{t('membership.third')}</h3></li>
                    <li className={style.membership__item}><h3 className={style.item__title}>{t('membership.fourth.0')}</h3>
                        <ul className={style.list}>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.fourth.1')}</p></li>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.fourth.2')}</p></li>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.fourth.3')}</p></li>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.fourth.4')}</p></li>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.fourth.5')}</p></li>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.fourth.6')}</p></li>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.fourth.7')}</p></li>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.fourth.8')}</p></li>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.fourth.9')}</p></li>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.fourth.10')}</p></li>
                        </ul>
                    </li>
                    <li className={style.membership__item}><h3 className={style.item__title}>{t('membership.fifth.0')}</h3>
                        <ul className={style.list}>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.fifth.1')}</p></li>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.fifth.2')}</p></li>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.fifth.3')}</p></li>
                        </ul>
                    </li>
                    <li className={style.membership__item}><h3 className={style.item__title}>{t('membership.sixth')}</h3></li>
                    <li className={style.membership__item}><h3 className={style.item__title}>{t('membership.seventh')}</h3></li>
                    <li className={style.membership__item}><h3 className={style.item__title}>{t('membership.eighth.0')}</h3>
                        <ul className={style.list}>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.eighth.1')}</p></li>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.eighth.2')}</p></li>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.eighth.3')}</p></li>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.eighth.4')}</p></li>
                            <li className={style.item}><p className={style.item__paragraph}>{t('membership.eighth.5')}</p></li>
                        </ul>
                    </li>
                </ol>
                <h2 className={style.title}>{t('membership.title.1')}</h2>
                <ul className={style.membership__list}>
                <li className={style.membership__item}><h3 className={style.item__title}>Ukraine War Animals Relief Fund  Dan Fine (Canada) – Managing Director</h3>
                    <a className={style.link} href="/public/presentations/Ukraine War Animals Relief Fund Strategic Planning HSI.pdf" target="_blank"><p className={style.item__paragraph}>Ukraine War Animals Relief Fund Strategic Planning HSI.pdf</p></a>    
                </li>
                <li className={style.membership__item}><h3 className={style.item__title}>White Angels - Dr. Galina Lazarchuk - Director</h3></li>
                <li className={style.membership__item}><h3 className={style.item__title}>"Animal in law" - Murga Iryna - Director</h3></li>
                <li className={style.membership__item}><h3 className={style.item__title}>"Tegtmeier Medizintechnik" - Heinrich Tegtmeier - Director (Rinteln, Deutschland)</h3></li>
                </ul>
            </div>
        </section>
    )
};

export default Membership;