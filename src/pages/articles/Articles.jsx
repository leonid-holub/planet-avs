import style from "./Articles.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PageInfo from "../../components/PageInfo/PageInfo";
import Article from "../../components/Article/Article";

const Articles = () => {
    const { t } = useTranslation();

return (
    <section className={style.articles}>
       <PageInfo>{t('articles.articles')}</PageInfo>
        <div className={`container ${style.articles__container}`}>
        <Link to="not-ready" className={style.item}>
                <Article img={"/images/posters/notReady.jpg"} alt={"Кадр з відео Ветеринатори"} type={"Відео"} title={`"Ніхто не був готовий!"`} description={"Під час російської окупації у селищі Немішаєве не залишилось лікарів, згадує Олександр Шупик. А кількість поранених постійно зростала."}></Article>
        </Link>
        <Link to="guide" className={style.item}>
                <Article img={"https://img.youtube.com/vi/gc2_FMiyLv8/maxresdefault.jpg"} alt={"Кадр з відео Ветеринатори"} type={"Відео"} title={"ПОВОДИР"} description={"Короткометражний документальний фільм, заснований на реальних подіях, які відбувалися на території України під час антитерористичної операції на Донбасі."}></Article>
        </Link>
        <Link to="thiernothilfe" className={style.item}>
                <Article img={"/images/posters/thiernothilfe.jpg"} alt={"Кадр з відео Міссія Миколаїв"} type={"Відео"} title={"Міссія Миколаїв"} description={"Короткометражний документальний фільм від Thiernothilfe Ukraine e.V."}></Article>
        </Link>
        <Link to="horses1" className={style.item}>
                <Article img={"/images/posters/commercial.jpg"} alt={"Кадр з відео Рекламний ролик"} type={"Відео"} title={"Рекламний ролик"} description={"Відеоролік на тему роботи з кіньми"}></Article>
        </Link>
        <Link to="horses2" className={style.item}>
                <Article img={"/images/posters/horses.jpg"} alt={"Кадр з відео Робота з кіньми 2"} type={"Відео"} title={"Робота з кіньми"} description={"Відеоблог про роботу"}></Article>
        </Link>
            <Link to="veterynatory" className={style.item}>
                <Article img={"/images/posters/veterenatory.jpg"} alt={"Кадр з відео Ветеринатори"} type={"Відео"} title={'Ветеринатори'} description={"Відеоблог про роботу"}></Article>
            </Link>
        </div>
    </section>
);
};

export default Articles;
