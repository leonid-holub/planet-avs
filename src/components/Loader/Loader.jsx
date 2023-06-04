
import { Circles } from  'react-loader-spinner'
import style from "./Loader.module.scss";


const Loader = () => {

    return (
        <div className={style.loader__wrapper}>
            <div className={style.loader}>
                <Circles
                height="80"
                width="80"
                color="#409bd3"
                ariaLabel="circles-loading"
                visible={true}
                />
            </div>
        </div>
    )

}

export default Loader;