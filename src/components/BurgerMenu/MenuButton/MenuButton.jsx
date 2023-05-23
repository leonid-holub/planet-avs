import style from "./MenuButton.module.scss";

const MenuButton = ({toggleBmIsOpen, bmIsOpen}) => {

    return (
        <div onClick={toggleBmIsOpen} className={bmIsOpen ? style["menu__button--open"] : style.menu__button}>
            <span className={style.button__item}></span>
            <span className={style.button__item}></span>
            <span className={style.button__item}></span>
            <span className={style.button__item}></span>
            <span className={style.button__item}></span>
            <span className={style.button__item}></span>
        </div>
    )
};

export default MenuButton;