import style from "./Home.module.scss";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation()

    return (
        <section className={style.hero}>
            <div className={`${style.container} ${style.hero__container}`}>
                <div className={style.hero__text}>
                    <h1 className={style.title}>PLANET.AVS</h1>
                    <p className={style.paragraph}>{t('home.avs')}</p>
                </div>
                <div className={style.hero__wrapper}>
                    <img className={style.hero__img} src="images/logo/horse-3.jpg" alt="paint horse" />
                </div>
            </div>
        </section>
    )
};

export default Home;
