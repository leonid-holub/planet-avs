import style from "./Home.module.scss";
import { useTranslation } from "react-i18next";

import BurgerMenu from "../../components/BurgerMenu/MenuButton/MenuButton";

const Home = () => {
    const { t } = useTranslation()

    return (
        <section className={style.hero}>
            <div className={`container ${style.hero__container}`}>
                <div className={style.hero__text}>
                    <h1 className={style.title}>PLANET.AVS</h1>
                </div>
                <img className={style.img} src="/images/dog-1.jpg" alt="Dog"/>
            </div>
        </section>
    )
};

export default Home;
