import style from "./PageInfo.module.scss";

const PageInfo = ({ children }) => {

return (
            <div className={style["page-info"]}>
                <div className={`${style["page-info__container"]} container`}>
                    <div className={style["page-info__text"]}>
                        <h2 className={style["page-info__title"]}>{children}</h2>
                    </div>
                </div>
            </div>

)
};

export default PageInfo;