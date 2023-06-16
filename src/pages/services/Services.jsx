import { useTranslation } from "react-i18next";
import PageInfo from "../../components/PageInfo/PageInfo";
import Article from "../../components/Article/Article";
import style from "./Services.module.scss";

const Services = () => {
    const { t } = useTranslation();

    return (
        <section className={style.services}>
            <PageInfo url="images/services/services-short-02.jpg">{t('services.services')}</PageInfo>
            <div className={`container ${style.services__container}`}>
                <p className={style.services__paragraph}>Щоб забезпечити здоров’я та довголіття наших пухнастих друзів, ми наголошуємо на важливості щорічного або двох разів на рік медичного огляду залежно від віку та стану здоров’я вашого вихованця. Ретельне обстеження та профілактичний догляд можуть допомогти полегшити серйозні проблеми зі здоров’ям. Ми пропонуємо широкий спектр ветеринарних послуг, щоб ваші супутники почувалися якнайкраще.</p>
                <ul className={style.services__list}>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-12.jpg"} alt="sleepy cat" title={"Анестезія домашніх тварин"} description={"Ми використовуємо найбезпечніші з доступних анестетиків, щоб забезпечити додатковий запас безпеки, особливо для наших літніх пацієнтів або пацієнтів з високим ризиком. За допомогою найсучаснішого обладнання контролюються життєво важливі функції пацієнта під час усіх анестезіологічних процедур."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-2.jpg"} alt="funny huskyt" title={"Стоматологія домашніх тварин"} description={"Захворювання зубів викликає інфекцію та біль. Ми переконані, що якісний догляд за зубами є одним із найдобріших речей, які ми можемо зробити для наших домашніх тварин! Наші стоматологічні послуги включають чистку та полірування зубів, рентген зубів, видалення зубів і малу хірургію порожнини рота."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-1.jpg"} alt="a dog in glasses" title={"Діагностика домашніх тварин"} description={"Ми використовуємо найновішу технологію діагностики домашніх тварин, щоб забезпечити найкращий догляд за нашими пацієнтами."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-8.jpg"} alt="a cat near a mesh fence" title={"Електрокардіографія домашніх тварин"} description={"Ми надаємо послуги ЕКГ на місці, а також консультації кардіологів."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-11.jpg"} alt="tired dog" title={"Невідкладна допомога домашнім тваринам"} description={"Будь ласка, зателефонуйте на наш основний номер телефону, щоб отримати інструкції щодо надзвичайних ситуацій у неробочий час."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-22.jpg"} alt="a monkey looks for a flea from another monkey" title={"Боротьба з блохами домашніх тварин"} description={"Ми розробляємо програми для конкретних потреб вашого вихованця та вашої конкретної екологічної ситуації. Ми розглянемо з вами найкращі способи боротьби з блохами у вашому будинку, у дворі та на вашому домашньому улюбленці."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-5.jpg"} alt="a small dog in glasses and a sweater" title={"Консультації з ветеринарної медицини"} description={"Ми пропонуємо стаціонарне направлення до лікаря внутрішньої медицини, який проводить УЗД та ендоскопічні процедури, що допомагає нам у діагностиці більш складних випадків."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-13.jpg"} alt="fluffy cat on a black background" title={"Лабораторія домашніх тварин"} description={"Наші власні лабораторії забезпечують хімію сироватки, гематологію, серологію, аналіз сечі та тестування на паразитів. Також ми використовуємо комерційні ветеринарні лабораторії для проведення спеціалізованої діагностики та консультацій."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-20.jpg"} alt="a white horse looking away" title={"Мікрочипування домашніх тварин"} description={"Мікрочіпування домашніх тварин — це простий, безпечний і ефективний спосіб допомогти возз’єднати втрачених домашніх тварин із їхніми власниками. Чіп містить унікальний ідентифікаційний номер, який пов’язаний із контактною інформацією власника в національній базі даних."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-21.jpg"} alt="a bowl with animal feed" title={"Консультації щодо харчування домашніх тварин"} description={"Консультації щодо харчування домашніх тварин"}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-14.jpg"} alt="little puppy" title={"Зооаптека"} description={"Ми підтримуємо повний асортимент фармацевтичних препаратів, вітамінів, шампунів, засобів для боротьби з блохами та кліщами та засобів для профілактики дирофіляріозу для задоволення потреб вашого вихованця. Ми також пропонуємо повну лінійку рецептурних дієт."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-7.jpg"} alt="husky in sunglasses" title={"Радіологія домашніх тварин"} description={"Наше сучасне рентгенівське обладнання на місці забезпечує високоякісні рентгенограми, які допомагають швидко діагностувати багато захворювань."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-9.jpg"} alt="golden retriever looks away" title={"Хірургія домашніх тварин"} description={"Наш сучасний хірургічний комплекс забезпечує виконання широкого спектру хірургічних процедур."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-19.jpg"} alt="white black horse in the wind" title={"Терапевтичні послуги для домашніх тварин"} description={"Терапевтичні послуги з догляду за тваринами стають все більш популярними, оскільки люди прагнуть забезпечити найкращий догляд за улюбленими домашніми тваринами."}/>
                    </li>
                    <li className={style.services__item}>
                        <Article img={"images/services/services-short-15.jpg"} alt="small white brown puppy" title={"Догляд за цуценятами та кошенятами"} description={"Ми рекомендуємо всім новим власникам цуценят і кошенят приводити свого вихованця на огляд здоров’я протягом перших кількох тижнів. Цей візит дасть нам можливість оцінити загальний стан здоров’я вашого вихованця та виявити можливі проблеми зі здоров’ям."}/>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default Services;