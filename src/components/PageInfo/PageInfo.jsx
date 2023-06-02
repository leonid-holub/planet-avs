import style from "./PageInfo.module.scss";

const PageInfo = ({ children }) => {

return (
            <div className={style["page-info"]}>
                <div className={`${style["page-info__container"]} container`}>
                    <div className={style["page-info__text"]}>
                        <h2 className={style["page-info__title"]}>{children}</h2>
                    </div>
                    <img className={style["page-info__img"]} src="images/logo/horse-3.jpg" alt="paint horse" width="300px"/>
                </div>
            </div>

)
};

export default PageInfo;