import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

const Article = ({ item, multiple }) => {
  return (
    <article className={multiple ? "card" : "card card__single img-fluid"}>
      <div className="card__wrapper">
        <figure className="card__feature">
          <img
            src={item.hero}
            className="card__img"
            alt="waves"
            width="275"
            height="240"
          />
        </figure>

        <div className="card__box">
          <header className="card__item card__header">
            <h6 className="card__item card__item--small card__label">
              {dateFormat(item.created, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
            </h6>
            <h2 className="card__item card__item--small card__title">
              {item.title}
            </h2>
          </header>

          <hr className="card__item card__divider" />

          <section className="card__item card__body">
            <p className="card__para">
              {multiple ? item.text.slice(0, 300) + " ..." : item.text}
            </p>
          </section>
          {multiple && (
            <Link className="float-right mb-3" to={`/article/${item.id}`}>
              Read more...
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default Article;
