import style from "./History.module.scss";
import { useTranslation, Trans } from "react-i18next";
import PageInfo from "../../components/PageInfo/PageInfo";

const History = () => {
    const { t } = useTranslation();

return (
    <section className={style.history}>
        <PageInfo url={"images/history/history-short-1.jpg"}><Trans>{t('history.history')}</Trans></PageInfo>
        <div className={`container ${style.history__container}`}>
            <div>
                <ul className={style.history__list}>
                    <li className={style.history__item}>
                        <h3 className={style.title}>Створення</h3>
                        <p className={style.paragraph}>28 січня 2015 року в смт Бородянка Бородянського району Київської області була зареєстрована
                        ГРОМАДСЬКА ОРГАНІЗАЦІЯ &quot;АССОЦІАЦІЯ ВЕТЕРИНАРНИХ СПЕЦІАЛІСТІВ НЕМІШАЇВСЬКОГО АГРОТЕХНІЧНОГО КОЛЕДЖУ&quot;</p>
                    </li>
                    <li className={style.history__item}>
                        <h3 className={style.title}>Зміна назви та розширення діяльності</h3>
                        <p className={style.paragraph}>Від 2 вересня 2019 року змінили назву на ГРОМАДСЬКА ОРГАНІЗАЦІЯ &quot;АССОЦІАЦІЯ ВЕТЕРИНАРНИХ СПЕЦІАЛІСТІВ 
                        КОЛЕДЖІВ УКРАЇНИ&quot;</p>
                    </li>
                    <li className={style.history__item}>
                        <h3 className={style.title}>Мета</h3>
                        <p className={style.paragraph}>Здійснення та захист прав і свобод, задоволення суспільних, зокрема економічних, соціальних,
                        культурних, екологічних, та інших інтересів ветеринарних спеціалістів при навчанні, здійсненні нами професійної, наукової та
                        іншої діяльності.</p>
                    </li>
                    <li className={style.history__item}>
                        <h3 className={style.title}>Отримання ліцензії на практичну діяльність</h3>
                        <p className={style.paragraph}>21 квітня 2015 року Головне Управління ветеринарної медицини в Київській області
                        прийняло рішення про видачу ліцензії на ветеринарну практику з необмеженим строком дії.</p>
                    </li>
                    <li className={style.history__item}>
                        <h3 className={style.title}>Засновники</h3>
                        <p className={style.paragraph}>Лазаренко Павло Валентинович <br/>Шупик Олександр Васильович</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
)
};

export default History;