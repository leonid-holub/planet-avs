import style from './Article.module.scss';


const Article = ({img, alt, title, description, type, collage}) => {

    return (
        <article className={style.article}>
            {img ? <img className={style.picture} src={img} alt={alt}/> : <div className={style.collage__wrapper}>{collage}</div>}
            <p className={style.paragraph}>{type}</p>
            <h3 className={style.title}>{title}</h3>
            <p className={style.paragraph}>{description}</p>
        </article>
    );
};

export default Article;