import { useMediaQuery } from "react-responsive";
import style from "./PageInfo.module.scss";

const PageInfo = ({ children, url }) => {
    const isSmallMobile = useMediaQuery({maxWidth: 479.99});
    const isTabletOrMobile = useMediaQuery({maxWidth: 1279.99});
    const isDesktop = useMediaQuery({ minWidth: 1280 });

return (
        <>
            <div className={style["page-info"]}>
                <div className={`${style["page-info__container"]} container`}>
                    <div className={style["page-info__text"]}>
                        <h2 className={style["page-info__title"]}>{children}</h2>
                    </div>
                    <img className={`${style["page-info__img"]}`} src={url} wdth="450"/>
                    {isSmallMobile ? <svg className={style["page-info__two-paws"]} width="32" height="32">
                        <use href="images/icons.svg#icon-two-paws"/>
                    </svg> : ''}
                    {isTabletOrMobile ? <svg className={style["page-info__four-paws"]} width="32" height="32">
                        <use href="images/icons.svg#icon-four-paws"/>
                    </svg> : ''}
                    {isDesktop ? <svg className={style["page-info__six-paws"]} width="32" height="32">
                        <use href="images/icons.svg#icon-six-paws"/>
                    </svg> : ''}
                </div>
            </div>
        </>
)
};

export default PageInfo;