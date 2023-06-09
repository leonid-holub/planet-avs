import style from "./Events.module.scss";
import { useTranslation } from "react-i18next";
import PageInfo from "../../components/PageInfo/PageInfo";
import Collage from "../../components/Collage/Collage";
import Article from "../../components/Article/Article";


const Events = () => {
    const { t } = useTranslation();

    return (
        <section className={style.events}>
            <PageInfo url={"images/events/events-short-1.jpg"}>{t('events.events')}</PageInfo>
            <div className={`container ${style.events__container}`}>
              <h3 className={style.events__title}>Тисни на фото для перегляду</h3>
              <ul className={style.events__list}>
                <li className={style.events__item}>
            <Article collage={<Collage slides={[
          {
            src: "images/events/polia/polia_1024_1280.jpg",
            alt: "image 1",
            width: 1024,
            height: 1280,
            srcSet: [
              { src: "images/events/polia/polia_1024_1280.jpg", width: 1024, height: 1280 },
            ]
          },
          {
            src: "images/events/polia/polia_960_960.jpg",
            alt: "image 5",
            width: 960,
            height: 960,
            srcSet: [
              { src: "images/events/polia/polia_960_960.jpg", width: 960, height: 960 },
            ]
          },
          {
            src: "images/events/polia/polia_1024_1280_2.jpg",
            alt: "image 2",
            width: 1024,
            height: 1280,
            srcSet: [
              { src: "images/events/polia/polia_1024_1280_2.jpg", width: 1024, height: 1280 },
            ]
          },
          {
            src: "images/events/polia/polia_1024_1280_3.jpg",
            alt: "image 3",
            width: 1024,
            height: 1280,
            srcSet: [
              { src: "images/events/polia/polia_1024_1280_3.jpg", width: 1024, height: 1280 },
            ]
          },
          {
            src: "images/events/polia/polia_1024_1280_4.jpg",
            alt: "image 4",
            width: 1024,
            height: 1280,
            srcSet: [
              { src: "images/events/polia/polia_1024_1280_4.jpg", width: 1024, height: 1280 },
            ]
          },
        ]} />} type={"Фото"} title={"«Стрес. Нейрозапалення. Вторинні мітохондріальні порушення»"} description={"«Міжнародна конференція на запрошення фармацевтичної компанії Hell»"}/>
                </li>
             <li className={style.events__item}>
           <Article collage={<Collage slides={[
          {
            src: "images/events/dog/dog-2.jpg",
            alt: "image 1",
            width: 960,
            height: 1280,
            srcSet: [
              { src: "images/events/dog/dog-2.jpg", width: 960, height: 1280 },
            ]
          },
          {
            src: "images/events/dog/dog-3.jpg",
            alt: "image 2",
            width: 960,
            height: 1280,
            srcSet: [
              { src: "images/events/dog/dog-3.jpg", width: 1280, height: 960 },
            ]
          },
          {
            src: "images/events/dog/dog-4.jpg",
            alt: "image 3",
            width: 960,
            height: 1280,
            srcSet: [
              { src: "images/events/dog/dog-4.jpg", width: 960, height: 1280 },
            ]
          },
          {
            src: "images/events/dog/dog-5.jpg",
            alt: "image 4",
            width: 960,
            height: 1280,
            srcSet: [
              { src: "images/events/dog/dog-5.jpg", width: 960, height: 1280 },
            ]
          },
          {
            src: "images/events/dog/dog-6.jpg",
            alt: "image 5",
            width: 960,
            height: 1280,
            srcSet: [
              { src: "images/events/dog/dog-6.jpg", width: 960, height: 1280 },
            ]
          },
          {
            src: "images/events/dog/dog-7.jpg",
            alt: "image 6",
            width: 960,
            height: 1280,
            srcSet: [
              { src: "images/events/dog/dog-7.jpg", width: 960, height: 1280 },
            ]
          },
          {
            src: "images/events/dog/dog-8.jpg",
            alt: "image 7",
            width: 960,
            height: 1280,
            srcSet: [
              { src: "images/events/dog/dog-8.jpg", width: 960, height: 1280 },
            ]
          },
          {
            src: "images/events/dog/dog-9.jpg",
            alt: "image 4",
            width: 1280,
            height: 960,
            srcSet: [
              { src: "images/events/dog/dog-9.jpg", width: 1280, height: 960 },
            ]
          }
        ]} />} type={"Фото"} title={"Відновлення зору службовій собаці"} description={"Робота на кінологічному центрі Головного управління Національної поліції Київщини"}/>
              </li>
                <li className={style.events__item}>
        <Article collage={<Collage slides={[
          {
            src: "images/events/poland_960_1280.jpg",
            alt: "image 1",
            width: 960,
            height: 1280,
            srcSet: [
              { src: "images/events/poland_960_1280.jpg", width: 960, height: 1280 },
            ]
          },
        ]} />} type={"Фото"} title={"Університет ім. Коперника в Туруні, Польща"} description={"25.01.23 Відкрита лекція по історії ветеринарної медицини на тему: Громадська діяльність ветеринарних лікарів в Бучанському районі під час воєнної агресії Росії в Україні."}/>
                  </li>
                 <li className={style.events__item}>
        <Article collage={<Collage slides={[
          {
            src: "images/events/vayda_bentley_960_960.jpg",
            alt: "image 1",
            width: 960,
            height: 960,
            srcSet: [
              { src: "images/events/vayda_bentley_960_960.jpg", width: 960, height: 960 },
            ]
          },
        ]} />} type={"Фото"} title={"Староконстантинівський військовий шпиталь"} description={"Вайда та Бентлі працюють у відділенні психіатрії."}/>
                  </li>
                  <li className={style.events__item}>
        <Article collage={<Collage slides={[
          {
            src: "images/events/lyst_958_1280.jpg",
            alt: "image 1",
            width: 960,
            height: 1280,
            srcSet: [
              { src: "images/events/lyst_958_1280.jpg", width: 960, height: 1280 },
            ]
          },
        ]} />} type={"Фото"} title={"Допомога в реабілітації"} description={"Рекомендаційний лист щодо подальшого застосування собак у медико-психологічній реабілітації військовослужбовців."}/>
                  </li>
                  <li className={style.events__item}>
        <Article collage={<Collage slides={[
          {
            src: "images/events/bentley_mriia_899_1124.jpg",
            alt: "image 1",
            width: 900,
            height: 1124,
            srcSet: [
              { src: "images/events/bentley_mriia_899_1124.jpg", width: 900, height: 1124 },
            ]
          },
        ]} />} type={"Фото"} title={"Підтримка"} description={"Бентлі у Ірпінському академічному ліцеї «Мрія» у сховищі під час сповіщення про повітряну небезпеку."}/>
                  </li>
                  <li className={style.events__item}>
        <Article collage={<Collage slides={[
          {
            src: "images/events/vayda_polia_bentley/vayda_polia_bentley_1_960_960.jpg",
            alt: "image 1",
            width: 960,
            height: 960,
            srcSet: [
              { src: "images/events/vayda_polia_bentley/vayda_polia_bentley_1_960_960.jpg", width: 960, height: 960 },
            ]
          },
          {
            src: "images/events/vayda_polia_bentley/vayda_polia_bentley_2_960_960.jpg",
            alt: "image 2",
            width: 960,
            height: 960,
            srcSet: [
              { src: "images/events/vayda_polia_bentley/vayda_polia_bentley_2_960_960.jpg", width: 960, height: 960 },
            ]
          },
          {
            src: "images/events/vayda_polia_bentley/vayda_polia_bentley_3_960-954.jpg",
            alt: "image 3",
            width: 960,
            height: 960,
            srcSet: [
              { src: "images/events/vayda_polia_bentley/vayda_polia_bentley_3_960-954.jpg", width: 960, height: 960 },
            ]
          },
        ]} />} type={"Фото"} title={"Зйомки телеканалу 1+1"} description={"Вайда, Поля та Бентлі у реабілітаційному центрі для військовослужбовців «Лісова поляна»."}/>
                  </li>
                  <li className={style.events__item}>
                <Article collage={<Collage slides={[
          {
            src: "images/events/vayda_polia_1280_1280.jpg",
            alt: "image 1",
            width: 1280,
            height: 1280,
            srcSet: [
              { src: "images/events/vayda_polia_1280_1280.jpg", width: 1280, height: 1280 },
            ]
          },
        ]} />} type={"Фото"} title={"Проект ЮНІСЕФ «Щасливе дитинство»"} description={"Вайда та Поля у ліцеї Мрія"}/>
                  </li>
                  <li className={style.events__item}>
                <Article collage={<Collage slides={[
          {
            src: "images/events/laboratory_960_1280.jpg",
            alt: "image 1",
            width: 960,
            height: 1280,
            srcSet: [
              { src: "images/events/laboratory_960_1280.jpg", width: 960, height: 1280 },
            ]
          },
        ]} />} type={"Фото"} title={"Люблін, Польща"} description={"Ознайомлення з роботою лабораторії, осмологічного кінологічного відділу Кримінальної поліції."}/>
                  </li>
                  <li className={style.events__item}>
                 <Article collage={<Collage slides={[
          {
            src: "images/events/vaida_lisova_1280_1280.jpg",
            alt: "image 1",
            width: 1280,
            height: 1280,
            srcSet: [
              { src: "images/events/vaida_lisova_1280_1280.jpg", width: 1280, height: 1280 },
            ]
          },
        ]} />} type={"Фото"} title={"Вайда у «Лісовій поляні»"} description={"Робота з людьми з обмеженими можливостями руху."}/>
                  </li>
                  <li className={style.events__item}>
                 <Article collage={<Collage slides={[
          {
            src: "images/events/v_b_kremen/vaida_bentley_kremen_1280_1280_1.jpg",
            alt: "image 1",
            width: 1280,
            height: 1280,
            srcSet: [
              { src: "images/events/v_b_kremen/vaida_bentley_kremen_1280_1280_1.jpg", width: 1280, height: 1280 },
            ]
          },
          {
            src: "images/events/v_b_kremen/vaida_bentley_kremen_1280_1280_2.jpg",
            alt: "image 2",
            width: 1280,
            height: 1280,
            srcSet: [
              { src: "images/events/v_b_kremen/vaida_bentley_kremen_1280_1280_2.jpg", width: 1280, height: 1280 },
            ]
          },
          {
            src: "images/events/v_b_kremen/vaida_bentley_kremen_1280_1280_3.jpg",
            alt: "image 3",
            width: 1280,
            height: 1280,
            srcSet: [
              { src: "images/events/v_b_kremen/vaida_bentley_kremen_1280_1280_3.jpg", width: 1280, height: 1280 },
            ]
          },
          {
            src: "images/events/v_b_kremen/vaida_bentley_kremen_1280_1280_4.jpg",
            alt: "image 4",
            width: 1280,
            height: 1280,
            srcSet: [
              { src: "images/events/v_b_kremen/vaida_bentley_kremen_1280_1280_4.jpg", width: 1280, height: 1280 },
            ]
          },
          {
            src: "images/events/v_b_kremen/vaida_bentley_kremen_1280_1280_5.jpg",
            alt: "image 5",
            width: 1280,
            height: 1280,
            srcSet: [
              { src: "images/events/v_b_kremen/vaida_bentley_kremen_1280_1280_5.jpg", width: 1280, height: 1280 },
            ]
          },
        ]} />} type={"Фото"} title={"Підтримка"} description={"Вайда та Бентлі працюють у Кременчутському військовому шпиталі."}/>
                  </li>
                   <li className={style.events__item}>
                 <Article collage={<Collage slides={[
          {
            src: "images/events/kremen_palata_828_1104.jpg",
            alt: "image 1",
            width: 828,
            height: 1104,
            srcSet: [
              { src: "images/events/kremen_palata_828_1104.jpg", width: 828, height: 1104 },
            ]
          },
        ]} />} type={"Фото"} title={"Кременчутський військовий шпиталь"} description={" Працюємо з допуском у палати."}/>
                  </li>
                    <li className={style.events__item}>
                 <Article collage={<Collage slides={[
          {
            src: "images/events/p_v_namn/polia_vaida_namn_1280_1280_2.jpg",
            alt: "image 2",
            width: 1280,
            height: 1280,
            srcSet: [
              { src: "images/events/p_v_namn/polia_vaida_namn_1280_1280_2.jpg", width: 1280, height: 1280 },
            ]
          },
          {
            src: "images/events/p_v_namn/polia_vaida_namn_1280_1280_3.jpg",
            alt: "image 3",
            width: 1280,
            height: 1280,
            srcSet: [
              { src: "images/events/p_v_namn/polia_vaida_namn_1280_1280_3.jpg", width: 1280, height: 1280 },
            ]
          },
          {
            src: "images/events/p_v_namn/polia_vaida_namn_1280_1280_1.jpg",
            alt: "image 1",
            width: 1280,
            height: 1280,
            srcSet: [
              { src: "images/events/p_v_namn/polia_vaida_namn_1280_1280_1.jpg", width: 1280, height: 1280 },
            ]
          },
        ]} />} type={"Фото"} title={"НАМН України"} description={"Поля та Вайда у Клініці реабілітації Інституту ортопедії і травматології НАМН України. Працюють переважно з ампутантами."}/>
                  </li>
                   <li className={style.events__item}>
                <Article collage={<Collage slides={[
          {
            src: "images/events/polia_konf_828_956.jpg",
            alt: "image 1",
            width: 828,
            height: 956,
            srcSet: [
              { src: "images/events/polia_konf_828_956.jpg", width: 828, height: 956 },
            ]
          },
        ]} />} type={"Фото"} title={"Поля на конференції"} description={"«Використання альтернативних терапій для відновлення здоров’я населення в умовах війни»."}/>
                  </li>
                  <li className={style.events__item}>
                <Article collage={<Collage slides={[
          {
            src: "images/events/v_p_b_namn/vauda_polia_bentley_namn_1280_1280_1.jpg",
            alt: "image 1",
            width: 1280,
            height: 1280,
            srcSet: [
              { src: "images/events/v_p_b_namn/vauda_polia_bentley_namn_1280_1280_1.jpg", width: 1280, height: 1280 },
            ]
          },
          {
            src: "images/events/v_p_b_namn/vauda_polia_bentley_namn_1280_1280_2.jpg",
            alt: "image 2",
            width: 1280,
            height: 1280,
            srcSet: [
              { src: "images/events/v_p_b_namn/vauda_polia_bentley_namn_1280_1280_2.jpg", width: 1280, height: 1280 },
          ]
        },
        {
          src: "images/events/v_p_b_namn/vauda_polia_bentley_namn_1280_1280_3.jpg",
          alt: "image 3",
          width: 1280,
          height: 1280,
          srcSet: [
            { src: "images/events/v_p_b_namn/vauda_polia_bentley_namn_1280_1280_3.jpg", width: 1280, height: 1280 },
        ]
      },
        ]} />} type={"Фото"} title={"НАМН України"} description={"Вайда, Поля та Бентлі у Клініці реабілітації Інституту травматології та ортопедії НАМН України."}/>
                  </li>
                  <li className={style.events__item}>
                <Article collage={<Collage slides={[
          {
            src: "images/events/v_b_kadec/vaida_bentley_kadec_1280_1280_1.jpg",
            alt: "image 1",
            width: 1280,
            height: 1280,
            srcSet: [
              { src: "images/events/v_b_kadec/vaida_bentley_kadec_1280_1280_1.jpg", width: 1280, height: 1280 },
            ]
          },
          {
            src: "images/events/v_b_kadec/vaida_bentley_kadec_1280_1280_2.jpg",
            alt: "image 2",
            width: 1280,
            height: 1280,
            srcSet: [
              { src: "images/events/v_b_kadec/vaida_bentley_kadec_1280_1280_2.jpg", width: 1280, height: 1280 },
          ]
        },
        {
          src: "images/events/v_b_kadec/vaida_bentley_kadec_1280_1280_3.jpg",
          alt: "image 3",
          width: 1280,
          height: 1280,
          srcSet: [
            { src: "images/events/v_b_kadec/vaida_bentley_kadec_1280_1280_3.jpg", width: 1280, height: 1280 },
        ]
      },
        ]} />} type={"Фото"} title={"Друзі"} description={"Вайда та Бентлі у Кадецькому корпусі імені Володимира Великого."}/>
                  </li>
                  <li className={style.events__item}>
                    <Article collage={<Collage slides={[
          {
            src: "images/events/p_tro/polia_tro_1080_1080_1.jpg",
            alt: "image 1",
            width: 1080,
            height: 1080,
            srcSet: [
              { src: "images/events/p_tro/polia_tro_1080_1080_1.jpg", width: 1080, height: 1080 },
            ]
          },
          {
            src: "images/events/p_tro/polia_tro_1080_1080_2.jpg",
            alt: "image 2",
            width: 1080,
            height: 1080,
            srcSet: [
              { src: "images/events/p_tro/polia_tro_1080_1080_2.jpg", width: 1080, height: 1080 },
          ]
        },
        ]} />} type={"Фото"} title={"ТРО"} description={"Поля спілкується з поліціянтами та бійцями ТРО на блокпості."}/>
                  </li>
        </ul>
        </div>
        </section>
    )
};

export default Events;