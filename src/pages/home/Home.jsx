import { useTranslation } from "react-i18next";
import Donates from "../../components/Donates/Donates";
import BurgerMenu from "../../components/BurgerMenu/MenuButton/MenuButton";
import style from "./Home.module.scss";

const Home = () => {
    const { t } = useTranslation()

    return (
        <><section className={style.hero}>
            <div className={`container ${style.hero__container}`}>
                <div className={style.hero__text}>
					<p className={style.hero__paragraph}><span className={style['logo__first-part']}>Planet.</span>AVS</p>
                    <h1 className={style.hero__title}>Громадська організація<br/>"Ассоціяція ветеринарних спеціалістів коледжів України"</h1>
                </div>
            </div>
        </section>
		<Donates/>
        {/* <section className={style.features}>
			<div className={`container ${style.features__container}`}>
        <h2 className="visually-hidden">Features</h2> */}
        {/* <ul className={style['card-set']} >
						<li className={style['card-set__item']}>
							<div className={style.features__thumb}>
								<svg className={style.features__icon} width="70px" height="70px">
									<use href="images/icons.svg#antenna"></use>
								</svg>
							</div>
							<h3 className={style.features__title}>УВАГА ДО ДЕТАЛЕЙ</h3>
							<p className={style.features__paragraph}
								>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugiat laudantium aspernatur.</p
							>
						</li>
						<li className={style['card-set__item']}>
							<div className={style.features__thumb}>
								<svg className={style.features__icon} width="70px" height="70px">
									<use href="images/icons.svg#clock"></use>
								</svg>
							</div>
							<h3 className={style.features__title}>ПУНКТУАЛЬНІСТЬ</h3>
							<p className={style.features__paragraph}
								>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea voluptatum facere id, non expedita.</p
							>
						</li>
						<li className={style['card-set__item']}>
							<div className={style.features__thumb}>
								<svg className={style.features__icon} width="70px" height="70px">
									<use href="images/icons.svg#diagram"></use>
								</svg>
							</div>
							<h3 className={style.features__title}>ПРОФЕСІОНАЛІЗМ</h3>
							<p className={style.features__paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
							laudantium optio blanditiis!</p>
						</li>
						<li className={style['card-set__item']}>
							<div className={style.features__thumb}>
								<svg className={style.features__icon} width="70px" height="70px">
									<use href="images/icons.svg#astronaut"></use>
								</svg>
							</div>
							<h3 className={style.features__title}>СУЧАСНІ ТЕХНОЛОГІЇ</h3>
							<p className={style.features__paragraph}
								>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ea?</p
							>
						</li>
				</ul> */}
					{/* </div>
            </section> */}
			</>
    )
};

export default Home;
