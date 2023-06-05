import style from "./Events.module.scss";
import { useTranslation } from "react-i18next";
import PageInfo from "../../components/PageInfo/PageInfo";
import Collage from "../../components/Collage/Collage";
import Article from "../../components/Article/Article";


const Events = () => {
    const { t } = useTranslation();

    return (
        <section className={style.events}>
            <PageInfo>{t('events.events')}</PageInfo>
            <div className={`container ${style.events__container}`}>
            <Article collage={<Collage slides={[
          {
            src: "/images/events/polia/polia_1024_1280.jpg",
            alt: "image 1",
            width: 256,
            height: 320,
            srcSet: [
              { src: "/images/events/polia/polia_1024_1280.jpg", width: 1024, height: 1280 },
            ]
          },
          {
            src: "/public/images/events/polia/polia_1024_1280_2.jpg",
            alt: "image 2",
            width: 256,
            height: 320,
            srcSet: [
              { src: "/images/events/polia/polia_1024_1280_2.jpg", width: 1024, height: 1280 },
            ]
          },
          {
            src: "/public/images/events/polia/polia_960_960.jpg",
            alt: "image 5",
            width: 240,
            height: 240,
            srcSet: [
              { src: "/public/images/events/polia/polia_960_960.jpg", width: 960, height: 960 },
            ]
          },
          {
            src: "/public/images/events/polia/polia_1024_1280_3.jpg",
            alt: "image 3",
            width: 256,
            height: 320,
            srcSet: [
              { src: "/images/events/polia/polia_1024_1280_3.jpg", width: 1024, height: 1280 },
            ]
          },
          {
            src: "/public/images/events/polia/polia_1024_1280_4.jpg",
            alt: "image 4",
            width: 256,
            height: 320,
            srcSet: [
              { src: "/public/images/events/polia/polia_1024_1280_4.jpg", width: 1024, height: 1280 },
            ]
          },
        ]} />} type={"Фото"} title={"«Стрес. Нейрозапалення. Вторинні мітохондріальні порушення»"} description={"«Міжнародна конференція на запрошення фармацевтичної компанії Hell»"}/>
           <Article collage={<Collage slides={[
          {
            src: "/public/images/events/dog/dog-2.jpg",
            alt: "image 1",
            width: 240,
            height: 320,
            srcSet: [
              { src: "/public/images/events/dog/dog-2.jpg", width: 960, height: 1280 },
            ]
          },
          {
            src: "/public/images/events/dog/dog-3.jpg",
            alt: "image 2",
            width: 320,
            height: 240,
            srcSet: [
              { src: "/public/images/events/dog/dog-3.jpg", width: 1280, height: 960 },
            ]
          },
          {
            src: "/public/images/events/dog/dog-4.jpg",
            alt: "image 3",
            width: 240,
            height: 320,
            srcSet: [
              { src: "/public/images/events/dog/dog-4.jpg", width: 960, height: 1280 },
            ]
          },
          {
            src: "/public/images/events/dog/dog-5.jpg",
            alt: "image 4",
            width: 240,
            height: 320,
            srcSet: [
              { src: "/public/images/events/dog/dog-5.jpg", width: 960, height: 1280 },
            ]
          },
          {
            src: "/public/images/events/dog/dog-6.jpg",
            alt: "image 5",
            width: 240,
            height: 320,
            srcSet: [
              { src: "/public/images/events/dog/dog-6.jpg", width: 960, height: 1280 },
            ]
          },
          {
            src: "/public/images/events/dog/dog-7.jpg",
            alt: "image 6",
            width: 240,
            height: 320,
            srcSet: [
              { src: "/public/images/events/dog/dog-7.jpg", width: 960, height: 1280 },
            ]
          },
          {
            src: "/public/images/events/dog/dog-8.jpg",
            alt: "image 7",
            width: 240,
            height: 320,
            srcSet: [
              { src: "/public/images/events/dog/dog-8.jpg", width: 960, height: 1280 },
            ]
          },
          {
            src: "/public/images/events/dog/dog-9.jpg",
            alt: "image 4",
            width: 320,
            height: 240,
            srcSet: [
              { src: "/public/images/events/dog/dog-9.jpg", width: 1280, height: 960 },
            ]
          }
        ]} />} type={"Фото"} title={"Відновлення зору службовій собаці"} description={"Робота на кінологічному центрі Головного управління Національної поліції Київщини"}/>
        <Article collage={<Collage slides={[
          {
            src: "/public/images/events/poland_960_1280.jpg",
            alt: "image 1",
            width: 240,
            height: 320,
            srcSet: [
              { src: "/public/images/events/poland_960_1280.jpg", width: 960, height: 1280 },
            ]
          },
        ]} />} type={"Фото"} title={"Університет ім. Коперника в Туруні, Польща."} description={"25.01.23 Відкрита лекція по історії ветеринарної медицини на тему: Громадська діяльність ветеринарних лікарів в Бучанському районі під час воєнної агресії Росії в Україні."}/>
        <Article collage={<Collage slides={[
          {
            src: "/public/images/events/vayda_bentley_960_960.jpg",
            alt: "image 1",
            width: 320,
            height: 320,
            srcSet: [
              { src: "/public/images/events/vayda_bentley_960_960.jpg", width: 960, height: 960 },
            ]
          },
        ]} />} type={"Фото"} title={"Староконстантинівський військовий шпиталь."} description={"Вайда та Бентлі працюють у відділенні психіатрії."}/>
        <Article collage={<Collage slides={[
          {
            src: "/public/images/events/lyst_958_1280.jpg",
            alt: "image 1",
            width: 320,
            height: 320,
            srcSet: [
              { src: "/public/images/events/lyst_958_1280.jpg", width: 960, height: 1280 },
            ]
          },
        ]} />} type={"Фото"} title={"Собаки для реабілітації"} description={"Рекомендаційний лист щодо подальшого застосування собак у медико-психологічній реабілітації військовослужбовців."}/>
        <Article collage={<Collage slides={[
          {
            src: "/public/images/events/bentley_mriia_899_1124.jpg",
            alt: "image 1",
            width: 300,
            height: 340,
            srcSet: [
              { src: "/public/images/events/bentley_mriia_899_1124.jpg", width: 900, height: 1124 },
            ]
          },
        ]} />} type={"Фото"} title={"Допомога в реабілітації"} description={"Бентлі у Ірпінському академічному ліцеї «Мрія» у сховищі під час сповіщення про повітряну наьезпеку."}/>
        <Article collage={<Collage slides={[
          {
            src: "/public/images/events/vayda_polia_bentley/vayda_polia_bentley_1_960_960.jpg",
            alt: "image 1",
            width: 320,
            height: 320,
            srcSet: [
              { src: "/public/images/events/vayda_polia_bentley/vayda_polia_bentley_1_960_960.jpg", width: 960, height: 960 },
            ]
          },
          {
            src: "/public/images/events/vayda_polia_bentley/vayda_polia_bentley_2_960_960.jpg",
            alt: "image 2",
            width: 320,
            height: 320,
            srcSet: [
              { src: "/public/images/events/vayda_polia_bentley/vayda_polia_bentley_2_960_960.jpg", width: 960, height: 960 },
            ]
          },
          {
            src: "/public/images/events/vayda_polia_bentley/vayda_polia_bentley_3_960-954.jpg",
            alt: "image 3",
            width: 320,
            height: 320,
            srcSet: [
              { src: "/public/images/events/vayda_polia_bentley/vayda_polia_bentley_3_960-954.jpg", width: 960, height: 960 },
            ]
          },
        ]} />} type={"Фото"} title={"Зйомки телеканалу 1+1."} description={"Вайда, Поля та Бентлі у реабілітаційному центрі для військовослужбовців «Лісова поляна»."}/>
                <Article collage={<Collage slides={[
          {
            src: "/public/images/events/vayda_polia_1280_1280.jpg",
            alt: "image 1",
            width: 320,
            height: 320,
            srcSet: [
              { src: "/public/images/events/vayda_polia_1280_1280.jpg", width: 1280, height: 1280 },
            ]
          },
        ]} />} type={"Фото"} title={"Проект ЮНІСЕФ «Щасливе дитинство»"} description={"Вайда та Поля у ліцеї Мрія"}/>
                <Article collage={<Collage slides={[
          {
            src: "/public/images/events/laboratory_960_1280.jpg",
            alt: "image 1",
            width: 240,
            height: 320,
            srcSet: [
              { src: "/public/images/events/laboratory_960_1280.jpg", width: 960, height: 1280 },
            ]
          },
        ]} />} type={"Фото"} title={"Люблін, Польща."} description={"Ознайомлення з роботою лабораторії, осмологічного кінологічного відділу Кримінальної поліції."}/>

        </div>
        </section>
    )
};

export default Events;