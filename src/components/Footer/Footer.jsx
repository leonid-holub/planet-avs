import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import style from './Footer.module.scss';

const Footer = () => {
	const { t } = useTranslation();
return (
    <footer className={style.footer}>
		<div className={`${style.footer__container} ${style.container}`}>
			<div className={style.logo}>
                <Link to="/">
                    <img className={style.logo__img} src="images/logo/photo_2023-05-17_17-39-46-fotor-bg-remove.png" alt="horse"/>                   
                </Link>
            </div>
				<div className={style['footer__container--left']}>
					<div className={style.footer__inform}>
						<div className={`${style.footer__logo} ${style.logo}`}>
                            <pre>
                                <span className={style["logo__first-part"]}>Planet</span>.AVS
                            </pre>
						</div>
						<address className={`${style.footer__adress} ${style.adress}`}>
							<ul className={style.list}>
								<li className={style.footer__item}>
									<a className={`${style.link} ${style["address-link"]}`} href="https://goo.gl/maps/J25wrrEzBbZf2wvA6" target="_blank" rel="nofollow noopener noreferrer">
									{t('footer.location')}
                                    </a>
								</li>
								<li className={style.footer__item}>
									<a className={`${style.link} ${style["footer__contact-link"]}`} href="mailto:info@devstudio.com">planet.avs@mail.com</a>
								</li>
								<li className={style.footer__item}>
									<a className={`${style.link} ${style["footer__contact-link"]}`} href="tel:+380961111111">+38 095 111 11 11</a>
								</li>
							</ul>
						</address>
					</div>
				<div className={style["footer-socials"]}>
						<h2 className={`${style["footer-socials__title"]} ${style.title}`}>{t('footer.socials')}</h2>
						<ul className={`${style["footer-socials__list"]} ${style.list}`}>
							<li className={style["footer-socials__item"]}>
								<a
									className={`${style["footer-socials__link"]} ${style.link}`}
									href=""
									target="_blank"
									rel="nofollow noopener noreferrer"
									aria-label="Instagram"
								>
									<svg className={style["footer-socials__icon"]} width="20px" height="20px">
										<use href="/images/icons.svg#instagram"></use>
									</svg>
								</a>
							</li>
							<li className={style["footer-socials__item"]}>
								<a
									className={`${style["footer-socials__link"]} ${style.link}`}
									href=""
									target="_blank"
									rel="nofollow noopener noreferrer"
									aria-label="Twitter"
								>
									<svg className={style["footer-socials__icon"]} width="20px" height="20px">
										<use href="/images/icons.svg#twitter"></use>
									</svg>
								</a>
							</li>
							<li className={style["footer-socials__item"]}>
								<a
									className={`${style["footer-socials__link"]} ${style.link}`}
									href=""
									target="_blank"
									rel="nofollow noopener noreferrer"
									aria-label="Facebook"
								>
									<svg className={style["footer-socials__icon"]} width="20px" height="20px">
										<use href="/images/icons.svg#facebook"></use>
									</svg>
								</a>
							</li>
							<li className={style["footer-socials__item"]}>
								<a
									className={`${style["footer-socials__link"]} ${style.link}`}
									href=""
									target="_blank"
									rel="nofollow noopener noreferrer"
									aria-label="LinkedIn"
								>
									<svg className={style["footer-socials__icon"]} width="20px" height="20px">
										<use href="/images/icons.svg#linkedin"></use>
									</svg>
								</a>
							</li>
						</ul>
				</div>
			</div>
		</div>
	</footer>
)
} ;

export default Footer;