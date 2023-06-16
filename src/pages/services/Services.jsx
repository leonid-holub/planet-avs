import { useTranslation } from "react-i18next";
import PageInfo from "../../components/PageInfo/PageInfo";
import Article from "../../components/Article/Article";
import style from "./Services.module.scss";

const Services = () => {
    const { t } = useTranslation();

    return (
        <section className={style.services}>
            <PageInfo url="/public/images/services/services-short-02.jpg">{t('services.services')}</PageInfo>
            <div className={`container ${style.services__container}`}>
                <p className={style.services__paragraph}>Щоб забезпечити здоров’я та довголіття наших пухнастих друзів, ми наголошуємо на важливості щорічного або двох разів на рік медичного огляду залежно від віку та стану здоров’я вашого вихованця. Ретельне обстеження та профілактичний догляд можуть допомогти полегшити серйозні проблеми зі здоров’ям. Ми пропонуємо широкий спектр ветеринарних послуг, щоб ваші супутники почувалися якнайкраще.</p>
                <ul className={style.services__list}>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-12.jpg"} alt="sleeping cat" title={"Анестезія домашніх тварин"} description={"Ми використовуємо найбезпечніші з доступних анестетиків, щоб забезпечити додатковий запас безпеки, особливо для наших літніх пацієнтів або пацієнтів з високим ризиком. За допомогою найсучаснішого обладнання контролюються життєво важливі функції пацієнта під час усіх анестезіологічних процедур."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-1.jpg"} alt="sleeping cat" title={"Стоматологія домашніх тварин"} description={"Захворювання зубів викликає інфекцію та біль. Ми переконані, що якісний догляд за зубами є одним із найдобріших речей, які ми можемо зробити для наших домашніх тварин! Наші стоматологічні послуги включають чистку та полірування зубів, рентген зубів, видалення зубів і малу хірургію порожнини рота."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-2.jpg"} alt="sleeping cat" title={"Діагностика домашніх тварин"} description={"Ми використовуємо найновішу технологію діагностики домашніх тварин, щоб забезпечити найкращий догляд за нашими пацієнтами."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-12.jpg"} alt="sleeping cat" title={"Електрокардіографія домашніх тварин"} description={"Ми надаємо послуги ЕКГ на місці, а також консультації кардіологів."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-1.jpg"} alt="sleeping cat" title={"Pet Anesthesia"} description={"We utilize the safest available anesthetics to provide an extra margin of safety, especially for our older or high-risk patients. Using the most modern equipment, the patient’s vital signs are monitored during all anesthetic procedures."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-2.jpg"} alt="sleeping cat" title={"Pet Anesthesia"} description={"We utilize the safest available anesthetics to provide an extra margin of safety, especially for our older or high-risk patients. Using the most modern equipment, the patient’s vital signs are monitored during all anesthetic procedures."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-12.jpg"} alt="sleeping cat" title={"Pet Anesthesia"} description={"We utilize the safest available anesthetics to provide an extra margin of safety, especially for our older or high-risk patients. Using the most modern equipment, the patient’s vital signs are monitored during all anesthetic procedures."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-1.jpg"} alt="sleeping cat" title={"Pet Anesthesia"} description={"We utilize the safest available anesthetics to provide an extra margin of safety, especially for our older or high-risk patients. Using the most modern equipment, the patient’s vital signs are monitored during all anesthetic procedures."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-2.jpg"} alt="sleeping cat" title={"Pet Anesthesia"} description={"We utilize the safest available anesthetics to provide an extra margin of safety, especially for our older or high-risk patients. Using the most modern equipment, the patient’s vital signs are monitored during all anesthetic procedures."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-12.jpg"} alt="sleeping cat" title={"Pet Anesthesia"} description={"We utilize the safest available anesthetics to provide an extra margin of safety, especially for our older or high-risk patients. Using the most modern equipment, the patient’s vital signs are monitored during all anesthetic procedures."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-1.jpg"} alt="sleeping cat" title={"Pet Anesthesia"} description={"We utilize the safest available anesthetics to provide an extra margin of safety, especially for our older or high-risk patients. Using the most modern equipment, the patient’s vital signs are monitored during all anesthetic procedures."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-2.jpg"} alt="sleeping cat" title={"Pet Anesthesia"} description={"We utilize the safest available anesthetics to provide an extra margin of safety, especially for our older or high-risk patients. Using the most modern equipment, the patient’s vital signs are monitored during all anesthetic procedures."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-12.jpg"} alt="sleeping cat" title={"Pet Anesthesia"} description={"We utilize the safest available anesthetics to provide an extra margin of safety, especially for our older or high-risk patients. Using the most modern equipment, the patient’s vital signs are monitored during all anesthetic procedures."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-1.jpg"} alt="sleeping cat" title={"Pet Anesthesia"} description={"We utilize the safest available anesthetics to provide an extra margin of safety, especially for our older or high-risk patients. Using the most modern equipment, the patient’s vital signs are monitored during all anesthetic procedures."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-2.jpg"} alt="sleeping cat" title={"Pet Anesthesia"} description={"We utilize the safest available anesthetics to provide an extra margin of safety, especially for our older or high-risk patients. Using the most modern equipment, the patient’s vital signs are monitored during all anesthetic procedures."}/>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default Services;