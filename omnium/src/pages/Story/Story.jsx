import { Link, useParams } from "react-router-dom";
import { stories } from "../../data/stories";

function Story() {
  const { slug } = useParams();

  const story = stories.find((story) => story.slug === slug);

  if (!story) {
    return <h2>Cuento no encontrado.</h2>;
  }

  return (
    <main className="story-page">
      <Link to="/">← Volver</Link>

      <h1>{story.title}</h1>

      <h3>{story.author}</h3>

      <img
        src={story.image}
        alt={story.title}
      />

      <p style={{ whiteSpace: "pre-line" }}>
        {story.content}
      </p>
    </main>
  );
}

export default Story;