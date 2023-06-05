import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import style from './Footer.module.scss';

const Footer = () => {
	const { t } = useTranslation();
return (
    <footer className={style.footer}>
		<div className={`${style.footer__container} container`}>
			<div className={style.logo}>
                <Link to="/">
                    <img className={style.logo__img} src="images/logo/photo_2023-05-17_17-39-46-fotor-bg-remove.png" alt="horse"/>                   
                </Link>
            </div>
				<div className={style['footer__container--left']}>
					<div className={style.footer__inform}>
						<div className={`${style.footer__logo} ${style.logo}`}>
                            <pre>
                                <span className={style["logo__first-part"]}>Planet.</span>AVS
                            </pre>
						</div>
						<address className={`${style.footer__address} ${style.address}`}>
							<ul className={style.list}>
								<li className={style.footer__item}>
									<a className={`${style.link} ${style["address-link"]}`} href="https://goo.gl/maps/WFAFR6ygAYtcZq3A8" target="_blank" rel="nofollow noopener noreferrer">
									<Trans>{t('footer.location')}</Trans>
                                    </a>
								</li>
								<li className={style.footer__item}>
									<a className={`${style.link} ${style["footer__contact-link"]}`} href="mailto:vethouse.avs@ukr.net">vethouse.avs@ukr.net</a>
								</li>
								<li className={style.footer__item}>
									<a className={`${style.link} ${style["footer__contact-link"]}`} href="tel:+380961111111">+38 098 546 98 76</a>
								</li>
								<li className={style.footer__item}>
									<a className={`${style.link} ${style["footer__contact-link"]}`} href="tel:+380961111111">+38 050 215 10 47</a>
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
									href="https://www.youtube.com/@planetAVSco/featured"
									target="_blank"
									rel="nofollow noopener noreferrer"
									aria-label="Youtube"
								>
									<svg className={style["footer-socials__icon"]} width="20px" height="20px">
										<use href="images/icons.svg#youtube"></use>
									</svg>
								</a>
							</li>
							{/* <li className={style["footer-socials__item"]}>
								<a
									className={`${style["footer-socials__link"]} ${style.link}`}
									href=""
									target="_blank"
									rel="nofollow noopener noreferrer"
									aria-label="Instagram"
								>
									<svg className={style["footer-socials__icon"]} width="20px" height="20px">
										<use href="images/icons.svg#instagram"></use>
									</svg>
								</a>
							</li> */}
							{/* <li className={style["footer-socials__item"]}>
								<a
									className={`${style["footer-socials__link"]} ${style.link}`}
									href=""
									target="_blank"
									rel="nofollow noopener noreferrer"
									aria-label="Twitter"
								>
									<svg className={style["footer-socials__icon"]} width="20px" height="20px">
										<use href="images/icons.svg#twitter"></use>
									</svg>
								</a>
							</li> */}
							<li className={style["footer-socials__item"]}>
								<a
									className={`${style["footer-socials__link"]} ${style.link}`}
									href="https://www.facebook.com/bieliaieva.kateryna"
									target="_blank"
									rel="nofollow noopener noreferrer"
									aria-label="Facebook"
								>
									<svg className={style["footer-socials__icon"]} width="20px" height="20px">
										<use href="images/icons.svg#facebook"></use>
									</svg>
								</a>
							</li>
							{/* <li className={style["footer-socials__item"]}>
								<a
									className={`${style["footer-socials__link"]} ${style.link}`}
									href=""
									target="_blank"
									rel="nofollow noopener noreferrer"
									aria-label="LinkedIn"
								>
									<svg className={style["footer-socials__icon"]} width="20px" height="20px">
										<use href="images/icons.svg#linkedin"></use>
									</svg>
								</a>
							</li> */}
						</ul>
				</div>
			</div>
		</div>
	</footer>
)
} ;

export default Footer;