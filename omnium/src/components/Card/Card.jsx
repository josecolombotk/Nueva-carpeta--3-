import "./Card.css";
import { Link } from "react-router-dom";

function Card({ story }) {
  return (
    <article className="card">

      <img
        src={story.image}
        alt={story.title}
        className="card-image"
      />

      <div className="card-body">

        <h3>{story.title}</h3>

        <p className="author">{story.author}</p>

        <p className="excerpt">{story.excerpt}</p>

        <Link
          to={`/cuento/${story.slug}`}
          className="card-button"
        >
          Leer cuento →
        </Link>

      </div>

    </article>
  );
}

export default Card;